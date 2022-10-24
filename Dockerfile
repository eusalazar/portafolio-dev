FROM node:16.15

WORKDIR /usr/src/app

COPY package*.json ./

COPY public/ ./public
COPY src/ ./src

RUN npm install

RUN npm run build

COPY . .

RUN npm install -g serve
EXPOSE 3000

CMD ["npm", "run", "start"]

# CMD ["serve", "-s", "build", "-l", "3500"]