FROM node:slim
MAINTAINER Renato Ribeiro

RUN apt-get update && apt-get install -y --no-install-recommends \
    nginx-light

COPY ./nginx /etc/nginx
COPY . /var/www/angular

WORKDIR /var/www/angular
CMD ["npm", "install", "typings"]
CMD ["npm", "install"]

CMD ["nginx", "-g", "daemon off;"]

