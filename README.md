# Scalable Services Assignment

This project demonstrates use of 2 services for a pet store in Docker using minikube
1. Authentication Service
2. Catalog Service

# Commands to create docker image and kube pods
##Build node application with express js to docker image
docker build . -t mmalhotra/docker_authentication_service:v1 
V1 – denotes version number

##Running docker image on a proxy host port
docker run --name=doc_authentication -p 35350:2300 -d mmalhotra/docker_authentication_service

353550 Proxy port 
2300 Service port

## Verify Service at port 
curl -i localhost:35350

## Start Minikube and show the services
minikube start
minikube status (Run status)
minikube dashboard (UI for services running on minikube)