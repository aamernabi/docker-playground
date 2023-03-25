
# Docker Imag

A **Docker Image** is a read-only template that contains a set of instructions for creating a **Docker container**.

A Docker image includes everything needed to run an application, including the application code, runtime, system tools, libraries, and settings. Images are created using a Dockerfile, which is a text file that defines the steps needed to build the image.


### Image vs Container

Image is the actual **package/artifact** (containing the application code and everything needed to run it). 

A container is an instance of that image running in an isolated environment. A **container** is a running enviroment for **image**.

List all images:

```
docker images
```

Remove an image:

```
docker rmi <image-id>
```

### Build Docker Image of app

We can build a Docker image from a Dockerfile, you can use the `docker build` command.
The Dockerfile structure in mentioned in [Dockerfile](./Dockerfile). 

```
docker build -t <app-name>:<tag> <path-to-app>
```
	Example:
	sudo docker build -t denoexampleapp:1.0 ./deno-example


When you run this command, Docker will read the instructions in the Dockerfile and build a new image based on those instructions. The resulting image will contain all the dependencies and configuration needed to run your app.

Note that the `docker build` command must be run from within the directory containing the Dockerfile. If your Dockerfile is located in a different directory, you can specify the path to the directory containing the Dockerfile like this: