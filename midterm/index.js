// const https = require("https")
import https from 'https'
// const fs = require("fs")
import fs from 'fs'
// const express = require('express')
import express from 'express'
import { getLoggerInstance } from "./logger.js"
const logger = getLoggerInstance()

import dotenv from 'dotenv'
dotenv.config();

const port = 8080

const app = express();
app.use(express.json());

import {tracking} from "./routes/tracking.js"
app.use('/', tracking)

import {departures} from "./routes/departures.js"
app.use('/', departures)

import { arrivals} from "./routes/arrivals.js"
app.use('/', arrivals)


const httpsOptions = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}
const server = https.createServer(httpsOptions,app);



app.get('/', (req, res) => {
    const trackingId = process.env.tracking_id;
    res.send("Flight Tracking app")
})




server.listen(port, () => {
    console.log('HTTPS is running on port ' + port + '')
});