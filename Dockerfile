FROM node:latest

RUN mkdir /code
WORKDIR /code
RUN npm install -g sails 
ADD . /code/

