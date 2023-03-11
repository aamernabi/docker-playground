
**Docker network** is a feature in Docker that enables containers to communicate with each other and with other network resources, such as the internet or other Docker hosts. It allows you to create virtual networks that can be used by containers to communicate with each other as if they were on the same physical network.

By default, Docker creates a bridge network when it is installed. This network enables communication between containers on the same host but does not allow containers on different hosts to communicate with each other.

* Check all the list of networks
```
docker network ls
```

* Create a new network
```
docker network create <network-name>
```

Example: Configuring Mongo-db

```
docker network create mongo-network
```

```
	docker run -d --network mongo-network --name mongo-db-name \
	-e MONGO_INITDB_ROOT_USERNAME=mongoadmin \
	-e MONGO_INITDB_ROOT_PASSWORD=secret \
	mongo
```

```
	docker run -d \
	-p 8081:8081 \
    --network mongo-network \
    --name mongo-express \
    -e ME_CONFIG_MONGODB_SERVER="mongo-db-name" \
    -e ME_CONFIG_MONGODB_ADMINUSERNAME="mongoadmin" \
    -e ME_CONFIG_MONGODB_ADMINPASSWORD="secret" \
    mongo-express
```