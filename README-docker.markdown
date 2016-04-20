Usage for Docker Containerization
=================================

Docker
------

### Docker Engine

Install [Docker Engine](http://docker.com).

### Docker Machine

Download `docker-machine` from <https://github.com/docker/machine/releases> then install it on your `PATH`.

Quick install for Linux:

    curl -L https://github.com/docker/machine/releases/download/v0.6.0/docker-machine-Linux-x86_64 > /usr/local/bin/docker-machine
    sudo chmod +x /usr/local/bin/docker-machine

### Docker Compose

Download `docker-compose` from <https://github.com/docker/compose/releases> then install it on your `$PATH`.

Quick install for Linux:

    curl -L https://github.com/docker/compose/releases/download/1.6.2/docker-compose-Linux-x86_64 > /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose

### Relevant Images

Pull some relevant images:

    # small
    docker pull tatsushid/tinycore-node
    docker pull mvertes/alpine-mongo

    # medium
    docker pull node
    docker pull mongo
    docker pull ubuntu

### Run Containers

Run all required containers:

    docker run -d --name arlin-mongo \
        -p 27017:27017 \
        -v $(pwd)/data:/data mongo

Access each containers to check:

    docker run -it --rm --link arlin-mongo:mongo mongo \
        mongo -u arlin -p thebestintheworld \
        --authenticationDatabase admin arlin-mongo/test

To stop and remove all running containers, use:

    docker stop $(docker ps -aq) && docker rm $(docker ps -aq)

### Build and Run

`docker build -t $(USER)/arlin-backend .`

`docker run -d -P $(USER)/arlin-backend`

`docker ps -aq`


### Backup data

Use [istepanov/mongodump](https://github.com/istepanov/docker-mongodump)


With cron

    docker run -d \
        -v /home/arlin/data:/backup \
        -e 'CRON_SCHEDULE=0 1 * * *' \
        --link mongodb:mongo \
        istepanov/mongodump

Without cron:

    docker run -d \
        -v /home/arlin/data:/backup \
        --link mongodb:mongo \
        istepanov/mongodump no-cron

