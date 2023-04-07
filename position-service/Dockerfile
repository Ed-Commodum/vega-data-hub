FROM node:16.14.2-alpine
WORKDIR /app
COPY package.json /app/
RUN npm install
RUN npm install -g nodemon
COPY index.js busEventTypes.js ringBuffers.js /app/
CMD ["nodemon", "index.js"]
