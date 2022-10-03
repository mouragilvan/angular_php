FROM webdevops/php-apache:7.3-alpine

WORKDIR /app

COPY . .

RUN  composer install
RUN  chmod 777 -R storage/logs
RUN  chmod -R 777 storage/framework

EXPOSE 80
EXPOSE 443