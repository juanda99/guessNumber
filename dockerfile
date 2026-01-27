# use nginx as base image
FROM nginx:latest

COPY ./dist /usr/share/nginx/html


