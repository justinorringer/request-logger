FROM node:10-alpine

RUN mkdir -p /home/node/request-logger/node_modules && chown -R node:node /home/node/request-logger

WORKDIR /home/node/request-logger

COPY package*.json index.js ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 3000

CMD [ "node", "index.js" ]
