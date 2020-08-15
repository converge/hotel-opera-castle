FROM node:14-alpine

WORKDIR /opt/app

EXPOSE 3000

COPY package.json package-lock.json ./

COPY ./src ./src

RUN npm install

CMD sh -c "npm run start"
