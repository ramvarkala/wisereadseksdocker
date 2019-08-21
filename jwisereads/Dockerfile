FROM openjdk:11.0.4-jre-slim

LABEL maintainer="Omniwyse.com"

COPY ./build/libs/books-api-1.0.jar /

WORKDIR /

EXPOSE 8080

CMD ["java", "-jar", "books-api-1.0.jar"]
