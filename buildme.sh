#!/bin/bash

./mongod &
mongo_pid=$!

node app.js &
node_pid=$!

sleep 5
echo -e "\n\n\n-----\n\n\nApp running! Press enter to kill"
read tmp

kill $mongo_pid
kill $node_pid

sleep 5
echo -e "\n\n\n-----\n\n\nApp closing. Goodbye!"
