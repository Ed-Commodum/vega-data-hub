FROM node:16.14.2-alpine
WORKDIR /app
COPY package.json index.js /app/
RUN npm install
RUN npm install -g nodemon
CMD ["nodemon", "index.js"]