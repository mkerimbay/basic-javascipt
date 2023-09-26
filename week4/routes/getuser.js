const express = require('express');
const getuser = express.Router("express");

getuser.post('/getuser', (req, res) => {
    const payload = req.body
    // const name = req.body.name;
    // const userId = req.body.userId;
    // const loginId = req.body.loginId;

    // whatever data is in payload, returning the same response
    res.send(payload);
});
  

module.exports = getuser;
