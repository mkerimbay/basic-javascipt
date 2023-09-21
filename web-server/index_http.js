// const http = require('http');
 
// const hostname = '127.0.0.1';
const express = require('express');
const app = express();
const hostname = 'localhost';
const port = 8080;

 
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });
 

app.get('/', (request, response) => {
    console.log(request, "request")
    response.send(({info: "Node.js, Express and Rest API"}))
});

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    
});
