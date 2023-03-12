FROM ubuntu:20.04 as builder

# Dependencies
RUN apt-get update && apt-get install -y git wget curl build-essential postgresql-client 

# Install Go version 1.19
RUN wget https://go.dev/dl/go1.19.4.linux-amd64.tar.gz && \
    rm -rf /usr/local/go && \
    tar -C /usr/local -xzf go1.19.4.linux-amd64.tar.gz && \
    ./usr/local/go/bin/go version

ENV PATH=$PATH:/usr/local/go/bin

# Build the Vega binary
RUN git clone --branch v0.67.2 https://github.com/vegaprotocol/vega.git vega && \
    export GOOS=linux && \
    export GOARCH=amd64 && \
    export CGO_ENABLED=0 && \
    cd vega && \
    make build && \
    ./cmd/vega/vega version && \
    cp ./cmd/vega/vega /bin/vega


# Create main image
FROM ubuntu:20.04

# Copy vega binary to main image
COPY --from=builder /bin/vega /bin/vega

# Dependencies
RUN apt-get update && apt-get install -y curl pwgen gnupg lsb-release curl wget git make gcc libkrb5-dev jq

# Environemnt variables
ARG DEBIAN_FRONTEND=noninteractive

# Add PostgreSQL PGP key
RUN sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'

# Add PostgreSQL repo
RUN wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | apt-key add -

# More dependencies
RUN apt-get update && \
    apt-get install -y software-properties-common postgresql-14 postgresql-client-14 postgresql-contrib-14 postgresql-server-dev-14

# Create database and user for vega datanode
USER postgres
RUN /etc/init.d/postgresql start && \
    psql --command "CREATE DATABASE vega;" && \
    psql --command "CREATE USER vega WITH PASSWORD 'vega';" && \
    psql --command "GRANT ALL PRIVILEGES ON DATABASE vega TO vega;" && \
    psql --command "ALTER ROLE vega WITH SUPERUSER"

RUN /etc/init.d/postgresql start && \
    psql -c "\l"

USER root
WORKDIR /app

# Install go
COPY --from=builder /usr/local/go /usr/local/go
ENV PATH=$PATH:/usr/local/go/bin
RUN /usr/local/go/bin/go version

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
RUN cat /etc/postgresql/14/main/postgresql.conf
RUN sed -i "/shared_preload_libraries/c\shared_preload_libraries = 'timescaledb'" /etc/postgresql/14/main/postgresql.conf && \
    timescaledb-tune --yes

# Set up TimescaleDB extension for database 'vega'
USER postgres
RUN /etc/init.d/postgresql start && \
    psql -d vega -c "CREATE EXTENSION IF NOT EXISTS timescaledb;" && \
    psql -d vega -c "\dx;" && \
    /etc/init.d/postgresql stop
USER root

# Set up Vega node
# Create user
RUN useradd -m ian
USER ian
WORKDIR /home/ian
RUN vega version

# Get genesis, peers, and Ethereum RPC
#RUN curl 'https://raw.githubusercontent.com/vegaprotocol/networks-internal/main/fairground/genesis.json' > genesis.json
RUN mkdir fairground-node-config
RUN curl -s 'https://n00.testnet.vega.xyz/config/genesis.json' > fairground-node-config/genesis.json
RUN jq -r '.chain_id' fairground-node-config/genesis.json > chain_id.txt
RUN curl -s 'https://n00.testnet.vega.xyz/config/tendermint-config.toml' > fairground-node-config/tendermint-config.toml
RUN grep -Po '(?<=^persistent_peers = ")[^"]*' fairground-node-config/tendermint-config.toml > peers.txt

ENV PEERS='503a32dbd88dfddaaedb26c08bf94e3b88271527@n01.testnet.vega.xyz:26656,d11e5c33795d1759db8bc50061e6a0c445aef47e@n02.testnet.vega.xyz:26656'
ENV ETH_RPC='https://sepolia.infura.io/v3/869041539dd64f1e911a18813bdf8712'


# Configure full node and datanode
RUN touch pass.txt && \
    echo "$(pwgen 16 1)" >> pass.txt && \
    vega datanode init $(cat chain_id.txt) --home /home/ian && \
    vega init --output json full && \
    vega tm init full && \
    sed -i '/Broker\.Socket/,+9{/Broker\.Socket/,+8{b};s/.*/    Enabled = true/}' .config/vega/node/config.toml && \
    cp fairground-node-config/genesis.json .tendermint/config/genesis.json && \
    sed -i "/RPCEndpoint =/c\  RPCEndpoint = '$ETH_RPC'" .config/vega/node/config.toml && \
    sed -i "/persistent_peers =/c\persistent_peers = '$PEERS'" .tendermint/config/config.toml && \
    sed -i "/max_packet_msg_payload_size =/c\max_packet_msg_payload_size = 4096000" .tendermint/config/config.toml && \
    vega nodewallet import --output json --chain tendermint --tendermint-home /home/ian/.tendermint --passphrase-file /home/ian/pass.txt --wallet-passphrase-file /home/ian/pass.txt && \
    vega nodewallet generate --output json --chain vega --passphrase-file /home/ian/pass.txt --wallet-passphrase-file /home/ian/pass.txt


# Run the ting
COPY start.sh start.sh
USER root
CMD ["bash", "start.sh"]

## Run the ting
#CMD ["/bin/vega","node","--nodewallet-passphrase-file","/home/ian/pass.txt"]
