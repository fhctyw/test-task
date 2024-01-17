FROM mysql:latest

ENV MYSQL_DATABASE=fitofan
ENV MYSQL_ROOT_PASSWORD=root

ADD ./init_script.sql /docker-entrypoint-initdb.d
ADD ./init_test_data.sql /docker-entrypoint-initdb.d

EXPOSE 3306