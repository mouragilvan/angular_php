FROM webdevops/php-apache:7.3-alpine
COPY . /app

RUN cd /app && composer install

RUN cd /app && cp .env-example .env


EXPOSE 80
EXPOSE 443