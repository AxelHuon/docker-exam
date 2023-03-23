# Utiliser une image Node.js officielle
FROM node:14-buster-slim

WORKDIR /back

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4001

CMD ["node", "index.js"]
