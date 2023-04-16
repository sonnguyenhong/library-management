'use strict';

const mongoose = require('mongoose');
const os = require('os');
const _SECONDS = 5000;
const CONNECTIONS_PER_CORES = 5;

const countConnect = () => {
    const numConnections = mongoose.connections.length;

    console.log(`Number of connections = ${numConnections}`);
};

const checkOverload = () => {
    setInterval(() => {
        const numConnections = mongoose.connections.length;
        const numCores = os.cpus().length;
        const memoryUsage = process.memoryUsage().rss;

        const maxConnections = numCores * CONNECTIONS_PER_CORES;

        console.log(`Memory usage: ${memoryUsage / 1024 / 1024}`);
        console.log(`Active connections: ${numConnections}`);

        if (numConnections > maxConnections) {
            console.log(`Connection overload detected`);
        }
    }, _SECONDS); // Check every 5 seconds
};

module.exports = { countConnect, checkOverload };
