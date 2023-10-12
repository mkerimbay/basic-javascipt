const https = require("https")
const fs = require("fs")
const express = require('express')
// const dotenv = require('dotenv')
const axios = require('axios')

// dotenv.config();

const port = 8080

const app = express();
// app.use('/', startUp)
// app.use('/', getLocation)
app.use(express.json());


const httpsOptions = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}
const server = https.createServer(httpsOptions,app);

app.get('/', async(req, res) => {
    res.send("It works")
})

app.get('/get-pokemon', async(req, res) => {
    const url = `https://pokeapi.co/api/v2/pokemon/1`
    
    const response = await axios.get(url)
    console.log(response.data, "response")
    const myPokemon = {"pokeon": response.data.abilities}
    res.send(myPokemon)
})


server.listen(port, () => {
    console.log('HTTPS is running on port ' + port + '')
});