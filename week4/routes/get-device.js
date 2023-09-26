const express = require('express');
const device = express.Router("express");

device.get('/get-device', (req, res) => {
    const userAgent = req.header('User-Agent');
    
    const response = {
        isWindows: userAgent.includes('Windows'),
        isMac: userAgent.includes('Mac'),
        isLinux: userAgent.includes('Linux'),
        postmanRunTime: userAgent.includes('Postman')
      };
    
    res.send(response);
});
  

module.exports = device;