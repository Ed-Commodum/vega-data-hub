

build:
	docker build markets-service/ -t data-hub/markets-mainnet && \
	docker build assets-service/ -t data-hub/assets-mainnet && \
	docker build trades-service/ -t data-hub/trades-mainnet && \
	docker build broker-service-go/ -t data-hub/broker-go-mainnet && \
	docker build api-service/ -t data-hub/api-mainnet && \
	docker build vega-node/0.71.4/ -t data-hub/vega-node-mainnet && \
	docker build socials-bots-service/ -t data-hub/socials-bots-mainnet && \
	docker build transfers-service/ -t data-hub/transfers-mainnet && \
	docker build market-data-service/ -t data-hub/market-data-mainnet && \
	docker build frontend-service/ -t data-hub/frontend-mainnet && \
	docker build stake-service/ -t data-hub/stake-mainnet;

build-from-root:
	docker build -f markets-service/Dockerfile -t data-hub/markets-mainnet . && \
	docker build -f assets-service/Dockerfile -t data-hub/assets-mainnet . && \
	docker build -f trades-service/Dockerfile -t data-hub/trades-mainnet . && \
	docker build -f broker-service-go/Dockerfile -t data-hub/broker-go-mainnet . && \
	docker build -f api-service/Dockerfile -t data-hub/api-mainnet . && \
	docker build -f vega-node/0.71.4/Dockerfile -t data-hub/vega-node-mainnet . && \
	docker build -f socials-bots-service/Dockerfile -t data-hub/socials-bots-mainnet . && \
	docker build -f transfers-service/Dockerfile -t data-hub/transfers-mainnet . && \
	docker build -f market-data-service/Dockerfile -t data-hub/market-data-mainnet . && \
	docker build -f frontend-service/Dockerfile -t data-hub/frontend-mainnet . && \
	docker build -f stake-service/Dockerfile -t data-hub/stake-mainnet .;