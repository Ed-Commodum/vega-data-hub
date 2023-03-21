FROM node:18.14.1-alpine
RUN apt install pkg-config
WORKDIR /app
COPY package.json /app/
RUN npm install
RUN npm install -g nodemon
COPY index.js /app/
CMD ["nodemon", "index.js"]