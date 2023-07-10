FROM node:18.14.1-alpine
WORKDIR /app
COPY package.json /app/
RUN npm install
RUN npm install -g nodemon
COPY index.js index.html /app/
CMD ["nodemon", "index.js"]
