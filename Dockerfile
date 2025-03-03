FROM node:20
WORKDIR /home/node/app
COPY package*.json ./
COPY --chown=node:node . .
RUN npm install
RUN npm run build
CMD ["npm","run", "start"]