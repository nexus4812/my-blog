---
title: "Laravel8でFactoryクラスが補完されるように設定する"
date: "2021-05-23"
---
上記のようなFactoryを用意した際に`unverified`メソッドが補完されず困ったのでメモ

```php
// database/factories/UserFactory.php 
class UserFactory extends Factory
{
    protected $model = User::class;
    
    public function unverified():self
    {
        return $this->state(function (array $attributes): array {
            return [
                'email_verified_at' => null,
            ];
        });
    }
}

User::factory()->unverified(); // めちゃくちゃ警告される

```

ModelクラスにてfactoryメソッドをオーバーライドすればIDE側で補完されるようになる。　

```php
// app/Models/User.php 
/**
 * @method static \Database\Factories\UserFactory factory(...$parameters)
 */
class User extends Model
{
    use HasFactory;
}
```