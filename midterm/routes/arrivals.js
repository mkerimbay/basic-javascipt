
import express from 'express'
export const arrivals = express.Router();
import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config();
// import { getLoggerInstance } from "../logger.js"
// const logger = getLoggerInstance()

const aviationStackEndpoint = 'http://api.aviationstack.com/v1/flights'
const aviationStackApi = process.env.access_key

async function trackFlight(airportCode) {

  const params = {
    access_key: aviationStackApi,
    arr_iata: airportCode
  }

  const response = await axios(aviationStackEndpoint, {params});
  return response.data;
  }



arrivals.post('/arrivals', async (req, res) => {

    const airportCode = req.body.airportCode;

    if (!airportCode) {
    return res.status(400).json({
        message: 'Airport Code is required',
    });
    }
    
    let d = await trackFlight(airportCode);
    console.log(d)
    d = d['data']


    const result = {
        'message' : null,
        'flights': []
    }
    
    
    
    if (d.length === 0) {
        result['message'] = `Airport with Code: ${airportCode} couldn't be found`
    }
    
    else {
        console.log(d[0])
        for (const el of d) {
            if (result['message'] === null){
                result['message'] = `active flights to: ${el['arrival']['airport']} airport`
            }
            if (el['flight_status'] === 'active') {
                result['flights'].push({
                    'date': el['flight_date'],
                    'status': el['flight_status'],
                    'scheduled': el['arrival']['scheduled'],
                    'from': el['departure']['airport'],
                    'airline': el['airline']['name'],
                    'flight': el['flight']['iata']
                    })
            }
        }

    
    }
    res.status(200).json(result);
  
})

