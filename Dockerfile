FROM node:13.5.0-alpine3.11 AS builder

WORKDIR /build

COPY package.json .
RUN npm install
RUN npm install -g grunt-cli

COPY /src /build/src
COPY index.html .
COPY gruntfile.js .
RUN grunt build

FROM httpd:2.4-alpine
EXPOSE 80
COPY --from=builder /build/dist /usr/local/apache2/htdocs/