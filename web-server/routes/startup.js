const express = require('express');
const startUp = express.Router("express");

startUp.get('/', (req, res) => {
    res.send('Hello World!');
  }  );
  
startUp.get('/live', (req, res) => {
    res.send('Web Service is Live!');
}  );
  
startUp.get('/startup', (req, res) => {
    res.send('Web Service has started-up!');
});
  
  
startUp.get('/maxat/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    res.send(id);
});
  
startUp.post('/sfbu', (req, res) => {
    const name = req.body.studentName;
    res.send({name});
    console.log(name)
})
  
  
startUp.get('/set-header', (req, res) => {
    // Set custom response headers
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Custom-Header', 'Hello from GET route');

    // Send a JSON response
    res.send({ message: 'This is a GET request' });
});

startUp.get('/get-device', (req, res) => {
    const device = req.header('User-Agent');
    res.send({device})
});

startUp.get('/get-ip', (req, res) => {
    const ipAddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    res.send({ipAddress});

});
  

module.exports = startUp;