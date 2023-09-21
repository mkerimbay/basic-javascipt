//  this is a https web-server
const https = require('https');
const express = require('express');
const port = 8080

app = express();

const fs = require('fs');
const httpsOptions = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}
const server = https.createServer(httpsOptions,app);

app.get('/', (req, res) => {
  res.send('Hello World!');
}  );

app.get('/live', (req, res) => {
    res.send('Web Service is Live!');
  }  );

app.get('/startup', (req, res) => {
    res.send('Web Service has started-up!');
}  );

app.get('/set-header', (req, res) => {
    // Set custom response headers
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Custom-Header', 'Hello from GET route');
    
    // Send a JSON response
    res.send({ message: 'This is a GET request' });
});

server.listen(port, () => {
    console.log('HTTPS is running on port ' + port + '')
});