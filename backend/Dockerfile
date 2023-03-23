# Utiliser une image Node.js officielle
FROM node:14

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
