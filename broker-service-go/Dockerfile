FROM golang:1.19.5-alpine

WORKDIR /app/

COPY go.mod go.sum /app/
RUN go mod download && go mod verify

COPY broker.go busEventTopicMappings.go /app/
RUN go build -v -o /usr/local/bin/broker ./...

CMD ["broker"]