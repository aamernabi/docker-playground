# Docker Compose

**Docker Compose** is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application’s services. Then, with a single command, you create and start all the services from your configuration.

The `docker-compose.yml` file is a YAML file that describes the services that make up your application, their configuration options, and how they are connected to each other. Each service can be based on a Docker image, and you can specify the image tag, environment variables, volumes, and ports that the service needs.

```
version: '3'  #docker compose version

services: # container list
  mongo-db:    #docker container name
    image: mongo
    restart: always
    ports:
      - "27017:27017"
    environment:
	  - MONGO_INITDB_ROOT_USERNAME=mongoadmin
	  - MONGO_INITDB_ROOT_PASSWORD=secret
	
  mongo-express:
    image: mongo-express
    restart: always
    ports:
      - "8081:8081"
    environment:
      - ME_CONFIG_MONGODB_SERVER=mongo-db
      - ME_CONFIG_MONGODB_ADMINUSERNAME=mongoadmin
      - ME_CONFIG_MONGODB_ADMINPASSWORD=secret

```

We don't need to create and configure docker network. The  docker compose takes care of creating a common network for the containers.
  

Run docker-compose file:

```
sudo docker compose -f mongo.yaml up
```

To remove all the config:
```
sudo docker compose -f mongo.yaml down
```