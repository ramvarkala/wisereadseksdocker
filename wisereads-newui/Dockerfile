#FROM httpd:latest
#COPY ./dist/WiseReads/* /usr/local/apache2/htdocs/
#EXPOSE 80

FROM ubuntu:latest
RUN apt-get update
RUN apt-get install apache2 -y
COPY ./dist/WiseReads/* /var/www/html/
RUN a2enmod rewrite
COPY ./.htaccess /var/www/html/
COPY ./apache2.conf /etc/apache2/
EXPOSE 80
CMD apachectl -D FOREGROUND
