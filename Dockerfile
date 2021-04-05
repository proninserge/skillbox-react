ARG CODE_VERSION=lts-slim
FROM node:${CODE_VERSION}

WORKDIR /app

COPY package*.json /app/

RUN npm install

EXPOSE 3030

EXPOSE 3031

USER node
