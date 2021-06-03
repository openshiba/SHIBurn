FROM node:14

WORKDIR /burner

COPY package.json .

RUN yarn install

COPY ./dist .
