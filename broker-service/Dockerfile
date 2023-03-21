FROM node:18.14.1-alpine
RUN apk add --no-cache pkgconfig python3 py3-pip make gcc build-base
WORKDIR /app
COPY package.json /app/
COPY sources /app/sources/
RUN npm install
RUN npm install -g nodemon
COPY index.js /app/
CMD ["nodemon", "index.js"]