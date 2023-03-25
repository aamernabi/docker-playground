
# Docker Volumes

**Docker volumes** are a way to **persist data** between containers and the host machine. A Docker volume is a directory or a file that is stored outside the container's file system and is managed by Docker.

Volumes can be used to store data that needs to persist between container restarts or to share data between containers. When you create a volume in Docker, it is stored on the host machine in a specific location. The folder in the physical host file system is mounted into the the virtual file system of Docker.

![[types-of-mounts-volume.png]]

```
docker run -d \ 
--name <container-name> \ 
-v <volume-name>:</path/in/container> \ 
<image-name>
```


Types of docker volumes:

1. **Host-mounted volumes**: A host-mounted volume is a directory or file on the host machine that is mounted into a container. This type of volume is useful for sharing files between the host machine and the container. When a host-mounted volume is used, the data is stored on the host machine and is available even after the container is removed. 
```
docker run  -v <host-directory>:<container-directory>
```
	Example:
	docker run  -v /home/mount/data:/var/lib/mysql/data

2. **Named volumes**: A named volume is a volume that is created and managed by Docker. This type of volume is useful for storing data that needs to persist between container restarts. Named volumes are created using the `docker volume create` command and can be shared between containers. You can reference the voulme by name
   ```
   docker run  -v <name>:<container-directory>
   ```
	Example:
	`docker run -v my-db-name:/var/lib/mysql/data`

3. **Anonymous volumes**: An anonymous volume is a volume that is created and managed by Docker but is not given a specific name. This type of volume is useful for storing temporary data that is only needed for the duration of a container's life. When the container is removed, the anonymous volume is also removed.
   ```   
   docker run  -v <container-directory>
   ```
	Example:
	`docker run -v /var/lib/mysql/data`

4. **tmpfs volumes**: A tmpfs volume is a temporary in-memory volume that is created by Docker. This type of volume is useful for storing data that needs to persist between container restarts but does not need to be stored on the host machine. When the container is removed, the tmpfs volume is also removed.
   ```
   docker run --mount type=tmpfs,destination=<path> 
   ```



### Volumes in Docker-Compose
Docker Compose allows to define and manage multi-container Docker applications. You can use Docker volumes in your Docker Compose file to persist data between containers and the host machine.

Here's an example of how to use a named volume in a Docker Compose file:
```
version: '3'

services:
  my-service:
    image: my-image
    volumes:
      - volume-name:/path/in/container

volumes:
  volume-name:

```