FROM node:16.14.2-alpine
RUN apk add --no-cache pkgconfig python3 py3-pip make gcc build-base
WORKDIR /app
COPY package.json /app/
COPY sources /app/sources/
COPY src /app/src/
RUN npm install
RUN npm install -g nodemon
COPY index.js busEventTypes.js busEventTopicMappings.js broker.js /app/
CMD ["nodemon", "index.js"]