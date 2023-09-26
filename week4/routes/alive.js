const express = require('express');
const alive = express.Router("express");

alive.get('/alive', (req, res) => {
    res.send('Web Service is Alive!');
});
  

module.exports = alive;