FROM golang:1.20.5-alpine

WORKDIR /app/

COPY go.mod go.sum /app/
RUN go mod download && go mod verify

COPY broker.go busEventTopicMappings.go persistence.go queries.go orderbook.go /app/
RUN go build -v -o /usr/local/bin/broker ./...

CMD ["broker"]

# RUN apk add build-base
# ENV CGO_ENABLED 1
# ENTRYPOINT ["go", "run", "--race", "."]