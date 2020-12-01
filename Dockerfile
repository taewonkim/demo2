FROM openjdk:8

ADD ./build/libs/demo1-0.0.1-SNAPSHOT.jar /

ENTRYPOINT [ "java", "-jar", "/demo1-0.0.1-SNAPSHOT.jar" ]

EXPOSE 8080
