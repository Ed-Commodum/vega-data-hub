# FROM ubuntu:20.04 as builder

# # Dependencies
# RUN apt-get update && apt-get install -y git wget curl build-essential postgresql-client 

# # Install Go version 1.19
# RUN wget https://go.dev/dl/go1.19.4.linux-amd64.tar.gz && \
#     rm -rf /usr/local/go && \
#     tar -C /usr/local -xzf go1.19.4.linux-amd64.tar.gz && \
#     ./usr/local/go/bin/go version

# ENV PATH=$PATH:/usr/local/go/bin

# # Build the Vega binary
# RUN git clone --branch v0.68.4 https://github.com/vegaprotocol/vega.git vega && \
#     export GOOS=linux && \
#     export GOARCH=amd64 && \
#     export CGO_ENABLED=0 && \
#     cd vega && \
#     make build && \
#     ./cmd/vega/vega version && \
#     cp ./cmd/vega/vega /bin/vega


# Create main image
FROM ubuntu:20.04

# # Copy vega binary to main image
# COPY --from=builder /bin/vega /bin/vega

# # Dependencies
# RUN apt-get update && apt-get install -y curl pwgen gnupg lsb-release curl wget git make gcc libkrb5-dev jq

# Dependencies
RUN apt-get update && apt-get install -y curl pwgen lsb-release curl wget git jq unzip

# Get vega binary from releases page
RUN wget -q -P /root/vega-downloads/binaries/0.68.4/ https://github.com/vegaprotocol/vega/releases/download/v0.68.4/vega-linux-amd64.zip && \
    unzip /root/vega-downloads/binaries/0.68.4/vega-linux-amd64.zip -d /bin/ && \
    vega version

# Environemnt variables
ARG DEBIAN_FRONTEND=noninteractive

# Set up Vega node
# Create user
RUN useradd -m ian
USER ian
WORKDIR /home/ian
RUN vega version

# Get genesis, peers, and Ethereum RPC
#RUN curl 'https://raw.githubusercontent.com/vegaprotocol/networks-internal/main/fairground/genesis.json' > genesis.json
RUN mkdir fairground-node-config
# RUN curl -s 'https://n00.testnet.vega.xyz/config/genesis.json' > fairground-node-config/genesis.json
RUN curl -s 'https://n00.validators-testnet.vega.xyz/config/genesis.json' > fairground-node-config/genesis.json
RUN jq -r '.chain_id' fairground-node-config/genesis.json > chain_id.txt
# RUN curl -s 'https://n00.testnet.vega.xyz/config/tendermint-config.toml' > fairground-node-config/tendermint-config.toml
RUN curl -s 'https://n00.validators-testnet.vega.xyz/config/tendermint-config.toml' > fairground-node-config/tendermint-config.toml
RUN grep -Po '(?<=^persistent_peers = ")[^"]*' fairground-node-config/tendermint-config.toml > peers.txt

# ENV PEERS='503a32dbd88dfddaaedb26c08bf94e3b88271527@n01.testnet.vega.xyz:26656,d11e5c33795d1759db8bc50061e6a0c445aef47e@n02.testnet.vega.xyz:26656'
# ENV ETH_RPC='https://sepolia.infura.io/v3/869041539dd64f1e911a18813bdf8712'


# Configure full node and datanode
RUN touch pass.txt && \
    export PEERS=$(cat peers.txt) && \
    # export ETH_RPC="https://sepolia.infura.io/v3/869041539dd64f1e911a18813bdf8712" && \
    echo "$(pwgen 16 1)" >> pass.txt && \
    vega datanode init $(cat chain_id.txt) --home /home/ian/datanode-home && \
    vega init --output json full && \
    vega tm init full && \
    sed -i '/Broker\.Socket/,+9{/Broker\.Socket/,+8{b};s/.*/    Enabled = true/}' .config/vega/node/config.toml && \
    sed -i '/Broker\.Socket/,+7{/Broker\.Socket/,+6{b};s/.*/    Address = "broker_address"/}' .config/vega/node/config.toml && \
    cp fairground-node-config/genesis.json .tendermint/config/genesis.json && \
    # sed -i "/RPCEndpoint =/c\  RPCEndpoint = '$ETH_RPC'" .config/vega/node/config.toml && \
    sed -i "/persistent_peers =/c\persistent_peers = '$PEERS'" .tendermint/config/config.toml && \
    sed -i "/max_packet_msg_payload_size =/c\max_packet_msg_payload_size = 16384" .tendermint/config/config.toml && \
    vega nodewallet import --output json --chain tendermint --tendermint-home /home/ian/.tendermint --passphrase-file /home/ian/pass.txt --wallet-passphrase-file /home/ian/pass.txt && \
    vega nodewallet generate --output json --chain vega --passphrase-file /home/ian/pass.txt --wallet-passphrase-file /home/ian/pass.txt


# Run the ting
COPY start.sh start.sh
# USER root
CMD ["vega", "start"]
# CMD ["bash", "start.sh"]

## Run the ting
#CMD ["/bin/vega","node","--nodewallet-passphrase-file","/home/ian/pass.txt"]
