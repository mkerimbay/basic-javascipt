//  this is a https web-server
// const https = require('https');
// const express = require('express');
// const startUp = require('./routes/startup');


import https from "https"
import fs from "fs"
import express from "express"
import {startUp} from "./routes/startup.js"
import { getLocation } from "./routes/getLocation.js"

import dotenv from "dotenv";
dotenv.config();

const port = 8080

const app = express();
app.use('/', startUp)
app.use('/', getLocation)
app.use(express.json());


const httpsOptions = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}
const server = https.createServer(httpsOptions,app);


server.listen(port, () => {
    console.log('HTTPS is running on port ' + port + '')
});