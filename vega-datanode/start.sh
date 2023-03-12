#!/bin/bash

# Start postgres
su postgres -c '/etc/init.d/postgresql start' &

# Start vega node
su ian -c 'vega node' &

# Start datanode
vega datanode start --home /home/ian
