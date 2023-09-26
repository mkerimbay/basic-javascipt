//  this is a https web-server
const https = require('https');
const express = require('express');
app = express();

app.use(express.json());

const alive = require('./routes/alive');
app.use('/', alive)

const device = require('./routes/get-device');
app.use('/', device)

const getuser = require('./routes/getuser');
app.use('/', getuser)

const port = 8080




const fs = require('fs');

const httpsOptions = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}
const server = https.createServer(httpsOptions,app);


app.get('/', (req, res) => {
    res.send('This is Home page')
});


server.listen(port, () => {
    console.log('HTTPS is running on port ' + port + '')
});




// const https = require('https');
// const express = require('express');
// const app = express();
// const port = 7000;

// app.use(express.json());

// // https server
// const fs = require('fs');
// const httpsOptions = {
//     key: fs.readFileSync('key.pem'),
//     cert: fs.readFileSync('cert.pem')
// }
// const server = https.createServer(httpsOptions,app);






// // generic route
// app.get('/:page', (req, res) => {
//     const { page } = req.params;
//     console.log(page);
//     res.send(`<h1>404 Requested page (/${page}) doesn't exist </h1>`)
// })

// app.listen(port, () => {
//     console.log('app is listening on port 8000')
// })


//  this is a https web-server




// const startUp = require('./routes/startup');
// app.use('/', startUp)








