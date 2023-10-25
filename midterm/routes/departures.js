
import express from 'express'
export const departures = express.Router();
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
    dep_iata: airportCode,
    flight_status: 'scheduled'
  }

  const response = await axios(aviationStackEndpoint, {params});
  return response.data;
  }



departures.post('/departures', async (req, res) => {

    const airportCode = req.body.airportCode;

    if (!airportCode) {
    return res.status(400).json({
        message: 'Airport Code is required',
    });
    }
    
    let d = await trackFlight(airportCode);

    d = d['data']


    const result = {
        'message' : null,
        'flights': []
    }

    if (d.length === 0) {
        result['message'] = `Airport with Code: ${airportCode} couldn't be found`
    }
    
    else {
        for (const el of d) {
            if (result['message'] === null){
                result['message'] = `scheduled flights from: ${el['departure']['airport']} airport`
            }
            result['flights'].push({
                'date': el['flight_date'],
                'status': el['flight_status'],
                'scheduled': el['departure']['scheduled'],
                'to': el['arrival']['airport'],
                'airline': el['airline']['name'],
                'flight': el['flight']['iata']
                })
        }

    
    }
    res.status(200).json(result);
  
})

