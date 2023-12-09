docker build --no-cache -f SQL\Dockerfile.PostgreSql -t proaraz/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t proaraz/app ../..
