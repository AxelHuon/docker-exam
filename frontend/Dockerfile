FROM node:14-buster-slim

WORKDIR /front

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm", "start"]
