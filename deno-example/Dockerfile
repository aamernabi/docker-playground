FROM denoland/deno:alpine

WORKDIR /home/app

ENV MONGO_DB_USER=admin \
    MONGO_DB_PWD=password

RUN mkdir -p /home/app

COPY ./app /home/app

EXPOSE 4000

CMD ["deno", "run", "--allow-net", "--allow-env", "--allow-read", "index.ts"]

