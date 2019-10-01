FROM php:7.0-apache
COPY ./dist/WiseReads/* /var/www/html/
ADD ./dist/WiseReads/assets /var/www/html/assets
RUN a2enmod rewrite
COPY ./.htaccess /var/www/html/
EXPOSE 80
COPY ./apache2.conf  /etc/apache2/
CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]
