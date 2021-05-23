import Link from 'next/link'
import Nav from "./parts/Nav";
import { useRouter } from 'next/router';
import MyHead from "./contents/Head"

export const siteTitle = 'Next.js Sample Website'

export default function Layout({children = null}) {
    const isHome = useRouter().asPath === "/"

    return (
        <>
            <MyHead/>
            <Nav/>
            <div className="container mx-auto flex-auto min-w-0 px-4  sm:px-6 xl:px-8 pb-24 lg:pb-20">
                <main>{children}</main>

                {!isHome && (
                    <div>
                        <Link href="/">
                            <a>← トップに戻る</a>
                        </Link>
                    </div>
                )}
            </div>
        </>
    )
}
