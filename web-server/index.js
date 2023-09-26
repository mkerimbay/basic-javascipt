//  this is a https web-server
const https = require('https');
const express = require('express');
app = express();



const startUp = require('./routes/startup');
app.use('/', startUp)

const port = 8080
app.use(express.json());




const fs = require('fs');

const httpsOptions = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}
const server = https.createServer(httpsOptions,app);


server.listen(port, () => {
    console.log('HTTPS is running on port ' + port + '')
});