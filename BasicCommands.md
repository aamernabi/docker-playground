
# Basic Commands

* Pull docker image
```
docker pull <image-name>
```
	Example:
	``docker pull redis``


* List all the docker images on your machine
```
docker images
```

	# display only the image IDs
	docker images -q 

	# customize the output format
	docker images --format '{{.Repository}}:{{.Tag}}'


* Run docker image
```
docker run <image-name>
```
	Example:
	docker run nginx

The `docker run` command create a new container of an image and start it.

The above command starts the container in the attached mode. To start the container in detached mode use following option:

```
docker run -d <image-name>
```

Using the name option
```
docker run -d --name <custom name> <image-name>
```

Using environmental variables:
```
	docker run -d --network mongo-network --name mongo-db-name \
	-e MONGO_INITDB_ROOT_USERNAME=mongoadmin \
	-e MONGO_INITDB_ROOT_PASSWORD=secret \
	mongo
```


Port Binding

```
docker run -p <host-port>:<container-port> <image-name>
```
	Example
	docker run -p 6001:6379 redis


* List all running containers
```
docker ps
```
	List running and not running containers
	docker ps -a


* Stop the running container
```
docker stop <container-id>
```

git remote add origin https://gitlab.com/aamernabi/docker-playground.git
* Start the container
```
docker start <container-id>
```

The `docker start` command starts the container.


* Logging
```
docker logs <container-id>
```
	Exmple
	docker logs 758f3fa3a3f1 | tail

Stream the logs
```
docker logs <container-id> -f
```

Get the terminal of running container:
```
docker exec -it <container-id> /bin/bash
```



* Remove docker container from docker list (docker ps -a)
```
docker rm <container-id-or-name>
```

