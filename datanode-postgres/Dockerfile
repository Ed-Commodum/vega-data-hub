FROM ubuntu:20.04

# Dependencies
RUN apt-get update && apt-get install -y gnupg lsb-release curl wget git pwgen make gcc libkrb5-dev

ARG DEBIAN_FRONTEND=noninteractive

# Add PostgreSQL PGP key
RUN sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'

# Add PostgreSQL repo
RUN wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | apt-key add -

# Dependencies
RUN apt-get update && \
    apt-get install -y software-properties-common postgresql-14 postgresql-client-14 postgresql-contrib-14 postgresql-server-dev-14

# Create database and user for vega datanode
USER postgres
RUN /etc/init.d/postgresql start && \
    psql --command "CREATE DATABASE vega;" && \
    psql --command "CREATE USER vega WITH PASSWORD 'vega';" && \
    psql --command "GRANT ALL PRIVILEGES ON DATABASE vega TO vega;"

RUN /etc/init.d/postgresql start && \
    psql -c "\l"

USER root
WORKDIR /app

# Install Go
RUN wget -q https://go.dev/dl/go1.19.4.linux-amd64.tar.gz && \
    rm -rf /usr/local/go && \
    tar -C /usr/local -xzf go1.19.4.linux-amd64.tar.gz && \
    /usr/local/go/bin/go version

ENV PATH=$PATH:/usr/local/go/bin

# Install timescaledb-tune
ENV GOBIN=/usr/local/go/bin
RUN go install github.com/timescale/timescaledb-tune/cmd/timescaledb-tune@v0.14.2

# Install cmake
RUN wget -q https://github.com/Kitware/CMake/releases/download/v3.25.1/cmake-3.25.1-linux-x86_64.sh && \
    mkdir cmake && \
    cp cmake-3.25.1-linux-x86_64.sh cmake/ && \
    cd cmake/ && \
    bash cmake-3.25.1-linux-x86_64.sh --skip-license

ENV PATH=$PATH:/app/cmake/bin


# Install TimescaleDB from source
RUN git clone https://github.com/timescale/timescaledb.git && \
    cd timescaledb && \
    git checkout 2.7.1 && \
    ./bootstrap && \
    cd build && \
    make && \
    make install

# Configure TimescaleDB
USER postgres
RUN /etc/init.d/postgresql start && \
    psql -U postgres -d postgres -c 'SHOW config_file;' && \
    /etc/init.d/postgresql stop
USER root
RUN sed -i "/shared_preload_libraries/c\shared_preload_libraries = 'timescaledb'" /etc/postgresql/14/main/postgresql.conf && \
    timescaledb-tune --yes

# Set up TimescaleDB extension for database 'vega'
USER postgres
RUN /etc/init.d/postgresql start && \
    psql -d vega -c "CREATE EXTENSION IF NOT EXISTS timescaledb;" && \
    psql -d vega -c "\dx;" && \
    /etc/init.d/postgresql stop

