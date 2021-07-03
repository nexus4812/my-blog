rm -fr ./out
yarn export
aws s3 rm s3://tama-go-go.nexus4812.com --recursive
cd ./out
aws s3 sync . s3://tama-go-go.nexus4812.com  --acl public-read --cache-control "max-age=31536000"
cd ./..