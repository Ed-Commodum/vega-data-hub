FROM node:16.14.2-alpine
WORKDIR /app
COPY package.json /app/
RUN npm install
RUN npm install -g nodemon
COPY index.js queries.js routes.js swagger.js /app/
COPY ./websocket-api/streamingApiServer.js ./websocket-api/streamQueries.js ./websocket-api/enums.js ./websocket-api/ringBuffers.js /app/websocket-api/
CMD ["nodemon", "index.js"]
