FROM openjdk:15

ENV ENVIRONMENT=prod

LABLE maintainer="stefan@neuefische.de"

ADD backend/target/app.jar app.jar

CMD [ "sh", "-c", "java -jar /app.jar" ]