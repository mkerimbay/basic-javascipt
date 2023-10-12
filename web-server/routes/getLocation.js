import express from "express";
import { getUserZipCode } from "./getUserZipCode.js";
export const getLocation = express.Router();


getLocation.get('/get-ip', async(req, res) => {
    const userIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    console.log(userIp)
    // res.send({userIp});
    try{
        if(userIp){
            const loc = await getUserZipCode(userIp)
            res.send(loc)
        }
    }
    catch(err){
        console.log(err)
        res.send({"error": err})
    }
    // const loc = await getUserZipCode(userIp)
    // console.log(loc)
    // res.send(loc)
})