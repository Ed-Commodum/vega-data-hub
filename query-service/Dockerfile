FROM node:16.14.2-alpine
WORKDIR /app
COPY package.json /app/
COPY sources /app/sources/
RUN npm install
RUN npm install -g nodemon
COPY index.js /app/
CMD ["GRPC_TRACE=all", "GRPC_VERBOSITY=DEBUG", "nodemon", "index.js"]

# "--inspect", "--max-old-space-size=40", "--trace-gc",