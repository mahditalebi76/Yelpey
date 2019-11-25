const loaders = require('./loaders/index');
const express = require('express');
const http = require('http');
require('dotenv').config();
const router = require('./api/routes/router');

async function startServer() {

    const app = express();
    await loaders.init();
    app.use('/api', router);
    const server = http.createServer(app);

    server.listen(process.env.PORT, err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(`Your server is ready !`);
    });
}

startServer();