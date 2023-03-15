
What is a **Container**? 

A container is a standardized unit of software that packages up an application and all its dependencies into a single, portable unit. Technically, a container is made up of **layers of images** stacked on top of each other and at the base we have **Linux Base Image** (because small in size).

* Way to package application with all the **neccesary dependencies** and **configurations**.
* **Isolation**: Each container provides a separate environment for running applications, with its own file system, network interfaces, and process tree.
* **Portability**: easily shared and moved around (between development team or end operations team) which makes development and deployment process more efficient. 
* **Scalability**: Containers can be easily scaled up or down to meet changing demand, either manually or using automatic scaling tools.

![Screenshot](container-layers.jpg)



### Container port and Host Port

-   Container port: is the port that is exposed by the container, and is the port that the application inside the container is listening on. We can have two containers with same container port. For example running different versions of redis image (both using same container port **6379**).

-   Host port: The host port is unique. We cannot start two applications listening on same port. Host port is the port on the host machine that is mapped to the container port. It allows traffic to be forwarded from the host machine to the container. 

For example, to start a container using the Nginx image and map port 80 on the host machine to port 80 in the container, you can run:

`docker run -p 80:80 nginx`


List all running containers
```
docker ps
```
	List running and not running containers
	docker ps -a


Remove container
```
docker rm <container-id-or-name>
```