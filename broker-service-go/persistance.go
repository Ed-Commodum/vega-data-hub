package main

import (
	"context"
	"log"
	"os"

	"github.com/jackc/pgconn"
	"github.com/jackc/pgx/v4"
	"github.com/jackc/pgx/v4/pgxpool"
)

type PgClient interface {
	Connect()
	Close()
	Query(string, ...interface{}) (pgx.Rows, error)
	Exec(string, ...interface{}) (pgconn.CommandTag, error)
}

type pgClient struct {
	dbUrl string
	pool  *pgxpool.Pool
}

type PersistanceManager interface {
	BlockPersist()
	BatchPersist()
}

type tradeManager struct {
}

type orderManager struct {
}

type ledgerMovementManager struct {
}

type assetManager struct {
}

type marketManager struct {
}

type marketDataManager struct {
}

type stakeManager struct {
}

func newPostgresClient() PgClient {
	pgClient := &pgClient{dbUrl: os.Getenv("DB_URL")}
	pgClient.Connect()
	return pgClient
}

func (client *pgClient) Connect() {
	pool, err := pgxpool.Connect(context.Background(), os.Getenv("PG_URL"))
	if err != nil {
		log.Fatalf("Failed to connect to database: %v\n", err)
	}
	client.pool = pool
}

func (client *pgClient) Close() {
	client.pool.Close()
}

func (client *pgClient) Query(queryStr string, args ...interface{}) (pgx.Rows, error) {
	return client.pool.Query(context.Background(), queryStr, args)
}

func (client *pgClient) Exec(queryStr string, args ...interface{}) (pgconn.CommandTag, error) {
	return client.pool.Exec(context.Background(), queryStr, args)
}
