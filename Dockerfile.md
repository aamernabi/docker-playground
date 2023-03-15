
A Dockerfile is a text document that contains a set of instructions used to build a Docker image. The basic structure of a Dockerfile consists of the following components:

1.  `FROM`: The `FROM` instruction specifies the base image to use for the build. This is usually an official image from the Docker Hub registry, such as `node`, `python`, or `ubuntu`.
    
2.  `WORKDIR`: The `WORKDIR` instruction sets the working directory for any subsequent instructions in the Dockerfile.
    
3.  `COPY` or `ADD`: The `COPY` or `ADD` instruction copies files and directories from the host machine into the container's filesystem. The syntax for these instructions is similar, but `ADD` allows for additional features such as unpacking compressed files and downloading files from URLs.
    
4.  `RUN`: The `RUN` instruction runs a command inside the container during the build process. This can be used to install dependencies, compile code, or perform any other necessary tasks.
    
5.  `CMD` or `ENTRYPOINT`: The `CMD` or `ENTRYPOINT` instruction specifies the command to run when a container is started from the image. `CMD` is used to provide default command arguments, while `ENTRYPOINT` is used to specify the main executable for the container.
    
6.  `EXPOSE`: The `EXPOSE` instruction informs Docker that the container will listen on the specified network ports at runtime.
    
7.  `ENV`:  The `ENV` instruction is used to specify the enviroment variables.


Example:

```
FROM denoland/deno:alpine

WORKDIR /home/app  

ENV MONGO_DB_USER=admin \
	MONGO_DB_PWD=password

RUN mkdir -p /home/app

COPY ./app /home/app

EXPOSE 4000

CMD ["deno", "run", "--allow-net", "index.ts"]
```