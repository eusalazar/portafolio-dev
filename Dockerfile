FROM node:16.15

WORKDIR /usr/src/app

COPY package*.json ./

COPY public/ ./public
COPY src/ ./src

RUN npm install

RUN npm build

COPY build/ ./build

EXPOSE 3500

CMD ["npm", "run", "start"]