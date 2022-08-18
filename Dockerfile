FROM openjdk:18

ENV ENVIRONMENT=prod

LABEL maintainer="m.gulzar@web.de"

ADD backend/target/app.jar app.jar

CMD [ "sh", "-c", "java -Dserver.port=$PORT -jar /app.jar" ]