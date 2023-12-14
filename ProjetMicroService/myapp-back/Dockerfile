# Utilisez une image Node.js LTS en tant qu'image de base
FROM node:14

# Créez le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copiez les fichiers de configuration et le package.json/package-lock.json
COPY package*.json ./

# Copiez le fichier .dockerignore
COPY .dockerignore .

# Excluez node_modules pendant la copie pour éviter la staleness des modules
COPY . .

# Installez les dépendances
RUN npm install

# Exposez le port sur lequel l'application écoute
EXPOSE 3001

# Commande pour démarrer l'application
CMD ["node", "app.js"]
