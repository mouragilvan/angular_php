FROM webdevops/php-apache:7.3-alpine

WORKDIR /app

COPY . .

RUN  cd /app && composer install
RUN  cd /app && chmod 777 -R storage/logs
RUN  cd /app && chmod -R 777 storage/framework

EXPOSE 80
EXPOSE 443