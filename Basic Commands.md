
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

The above command starts the container in the attached mode. To start the container in detached mode use following option:

```
docker run -d <image-name>
```

Using the name option

```
docker run -d --name <custom name> <image-name>
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


* Start the container
```
docker start <container-id>
```


* Logging
```
docker logs <container-id>
```


* Remove docker container from docker list (docker ps -a)
```
docker rm <container-id-or-name>
```

