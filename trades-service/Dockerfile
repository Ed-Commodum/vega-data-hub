FROM node:18.17.1-alpine
WORKDIR /app
COPY package.json /app/
RUN npm install
RUN npm install -g nodemon
COPY index.js type-mappings.js busEventTopicMappings.js busEventTypes.js /app/
CMD ["nodemon", "index.js"]
