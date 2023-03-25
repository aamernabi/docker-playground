# Docker

What is **Docker**?

**Docker** is a popular **containerization** platform that allows you to package your applications along with their dependencies into a single container, which can be easily deployed and run on any platform that supports Docker.

In other words, Docker allows you to create a lightweight, portable, and self-contained environment for your application, which can be run on any machine with Docker installed, without having to worry about installing and configuring dependencies or dealing with compatibility issues.

**Docker** uses a client-server architecture and is built on top of Linux container technology. It provides a simple and consistent way to build, ship, and run your applications in containers, which can be managed and orchestrated using tools like Docker Compose and Kubernetes.


### Docker Objects

Docker objects are the various components that make up a Docker environment. These objects include images, containers, networks, volumes, and more.

Here's a brief overview of some of the most commonly used Docker objects:

-   **Images**: Images are read-only templates used to create Docker containers. They include an application or service, along with all of its dependencies.

-   **Containers**: Containers are running instances of Docker images. Each container runs in its own isolated environment, with its own network and file system.

-   **Networks**: Networks allow containers to communicate with each other, as well as with external networks. Docker supports several types of networks, including bridge, overlay, and host.

-   **Volumes**: Volumes are a way to persist data between containers or between container restarts. They can be created as a named volume, a host-mounted volume, or a temporary volume.

-   **Services**: Services are used to define long-running tasks in a Docker environment. They typically correspond to a group of containers running the same application, with load balancing and other features provided by Docker Swarm.

-   **Swarm**: Docker Swarm is a tool used to manage clusters of Docker nodes. It provides features like load balancing, service discovery, and automatic container placement and scaling.


1. [Docker Basic Commands](BasicCommands.md)
2. [Docker Images](DockerImage.md)
3. [Docker Containers](Containers.md)
4. [Docker Network](DockerNetwork.md)
5. [Dockerfile](Dockerfile.md)
6. [Docker Compose](DockerCompose.md)
7. [Docker Volumes](DockerVolumes.md)