FROM composer:2.0.12 AS build
WORKDIR /app
COPY . /app
RUN composer install

FROM php:8.2-apache AS server
RUN docker-php-ext-install pdo pdo_mysql
RUN apt-get -y update
RUN apt-get -y install git zip unzip

COPY --from=composer:2.0.12 /usr/bin/composer /usr/local/bin/composer

EXPOSE 8080
COPY --from=build /app /var/www/
COPY docker/000-default.conf /etc/apache2/sites-available/000-default.conf
COPY .env.example /var/www/.env
RUN chmod 777 -R /var/www/storage/ && \
    echo "Listen 8080" >> /etc/apache2/ports.conf && \
    chown -R www-data:www-data /var/www/ && \
    a2enmod rewrite
