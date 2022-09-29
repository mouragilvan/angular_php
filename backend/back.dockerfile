FROM webdevops/php-apache:7.3-alpine
COPY . /app

EXPOSE 80
EXPOSE 443