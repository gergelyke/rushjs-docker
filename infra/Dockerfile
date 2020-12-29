# app base image

FROM node:14

ARG APP
ENV _APP=$APP

RUN npm i @microsoft/rush@5.35.2 --global

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY . .

EXPOSE 3000

CMD cd "/apps/$_APP" && rushx start
