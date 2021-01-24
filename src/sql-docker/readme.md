# SQL Docker Container

We experimented with running Docker on a Raspberry Pi 4, using Docker-Compose originally as we had used the Balena Cloud operating system to host microservices such as MySQL on.

It was impossible to bind mounts using the Docker implementation of Balena Cloud, this was needed to insert our custom `my.cnf` configuration which contains custom properties for allowing access from WAN, forced SSL connections and changing the MySQL port to 8888.

We then tried to build this Docker image from source using the DockerFile but it did not launch so I went to install the original Docker-Compose with the modified SQL server properties on a standard Linux distribution that caused no issues.

The keystore and truststore for securing our MySQL server was stored on a external host that Spring Boot will verify the connection with.