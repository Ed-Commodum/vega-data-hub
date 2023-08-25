FROM ubuntu:20.04

# Dependencies
RUN apt-get update && apt-get install -y curl pwgen lsb-release curl wget git jq unzip

# Get vega visor binary from releases
RUN wget -q -P /root/vega-downloads/visor/0.71.5 https://github.com/vegaprotocol/vega/releases/download/v0.71.5/visor-linux-amd64.zip && \
    unzip /root/vega-downloads/visor/0.71.5/visor-linux-amd64.zip -d /bin/ && \
    visor version

# Get vega binary from releases page
RUN wget -q -P /root/vega-downloads/binaries/0.71.4/ https://github.com/vegaprotocol/vega/releases/download/v0.71.4/vega-linux-amd64.zip && \
    unzip /root/vega-downloads/binaries/0.71.4/vega-linux-amd64.zip -d /bin/ && \
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
RUN mkdir node-config
RUN curl -s 'https://raw.githubusercontent.com/vegaprotocol/networks/master/mainnet1/genesis.json' > node-config/genesis.json
RUN jq -r '.chain_id' node-config/genesis.json > chain_id.txt
RUN echo "fd446b4274b91d1717e551efe2f4e488978a6070@49.13.10.31:26656,71ae2cabdea51c50200680bec2f6b613a0a93d93@37.27.3.139:26656,c5b11e1d819115c4f3974d14f76269e802f3417b@34.88.191.54:26656" > peers.txt

# Configure full node
RUN touch pass.txt && \
    export PEERS=$(cat peers.txt) && \
    echo "$(pwgen 16 1)" >> pass.txt && \
    vega init --output json full && \
    vega tendermint init full --home /home/ian/.cometbft && \
    sed -i '/Broker\.Socket/,+9{/Broker\.Socket/,+8{b};s/.*/    Enabled = true/}' .config/vega/node/config.toml && \
    sed -i '/Broker\.Socket/,+7{/Broker\.Socket/,+6{b};s/.*/    Address = "broker_address"/}' .config/vega/node/config.toml && \
    sed -i '/Broker\.Socket/,+5{/Broker\.Socket/,+4{b};s/.*/    SocketChannelBufferSize = 100000/}' .config/vega/node/config.toml && \
    sed -i '/Snapshot/,+6{/Snapshot/,+5{b};s/.*/  StartHeight = -1/}' .config/vega/node/config.toml && \
    cp node-config/genesis.json .cometbft/config/genesis.json && \
    sed -i "/persistent_peers =/c\persistent_peers = '$PEERS'" .cometbft/config/config.toml && \
    sed -i "/max_num_outbound_peers =/c\max_num_outbound_peers = 30" .cometbft/config/config.toml && \
    sed -i "/indexer =/c\indexer = 'null'" .cometbft/config/config.toml && \
    # sed -i "/indexer =/c\indexer = 'null'" .cometbft/config/config.toml && \
    # sed -i "/max_packet_msg_payload_size =/c\max_packet_msg_payload_size = 16384" .tendermint/config/config.toml && \
    vega nodewallet import --output json --chain tendermint --tendermint-home /home/ian/.cometbft --passphrase-file /home/ian/pass.txt --wallet-passphrase-file /home/ian/pass.txt && \
    vega nodewallet generate --output json --chain vega --passphrase-file /home/ian/pass.txt --wallet-passphrase-file /home/ian/pass.txt

# Init vegavisor
RUN visor init --home /home/ian/.visor && \
    sed -i '/maxNumberOfFirst/c\maxNumberOfFirstConnectionRetries = 100' .visor/config.toml && \
    sed -i '/path =/c\    path = "vega"' .visor/genesis/run-config.toml && \
    sed -i '/args =/c\    args = [ "start" ]' .visor/genesis/run-config.toml && \
    # sed -i '/args =/c\    args = [ "start", "--snapshot.load-from-block-height=1275900" ]' .visor/genesis/run-config.toml && \
    # sed -i '/args =/c\    args = [ "start", "--snapshot.load-from-block-height=-1" ]' .visor/genesis/run-config.toml && \
    sed -i '/socketPath =/c\    socketPath = "/tmp/vega.sock"' .visor/genesis/run-config.toml && \
    sed -i '/httpPath =/c\    httpPath = "/rpc"' .visor/genesis/run-config.toml && \
    cp /bin/vega .visor/genesis/vega
    # visor --help

# Run the ting
# CMD ["vega", "start"]
CMD [ "visor", "run", "--home=/home/ian/.visor" ]

## Run the ting
#CMD ["/bin/vega","node","--nodewallet-passphrase-file","/home/ian/pass.txt"]
