FROM php:7.0-apache
COPY ./dist/WiseReads/* /var/www/html/
ADD ./dist/WiseReads/assets /var/www/html/assets
#RUN mkdir /var/www/html/assets
#COPY ./dist/WiseReads/assets/* /var/www/html/assets/
EXPOSE 80
COPY ./apache2.conf  /etc/apache2/
CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]
