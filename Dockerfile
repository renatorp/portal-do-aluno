FROM node:slim
MAINTAINER Renato Ribeiro

RUN apt-get update && apt-get install -y --no-install-recommends \
    nginx-light

COPY ./nginx-files/nginx.conf /etc/nginx/
COPY ./nginx-files/default /etc/nginx/sites-available/
COPY . /var/www/angular

WORKDIR /var/www/angular
CMD ["npm", "install", "typings"]
CMD ["npm", "install"]


CMD ["nginx", "-g", "daemon off;"]

