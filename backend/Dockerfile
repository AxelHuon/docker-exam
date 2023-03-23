# Utiliser une image Node.js officielle
FROM node:14-buster-slim


# Install wait-for-it script
RUN apt-get update && apt-get install -y wget && \
    wget -q https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh -O /usr/local/bin/wait-for-it && \
    chmod +x /usr/local/bin/wait-for-it

# Créer un répertoire pour l'application
WORKDIR /usr/src/app

# Copier le fichier package.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code de l'application
COPY . .



# Exposer le port 4001
EXPOSE 4001


# Exécuter l'application
CMD ["node", "index.js"]

