
import express from 'express'
export const tracking = express.Router();
import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config();
// import { getLoggerInstance } from "../logger.js"
// const logger = getLoggerInstance()

const aviationStackEndpoint = 'http://api.aviationstack.com/v1/flights'
const aviationStackApi = process.env.access_key

async function trackFlight(flightNumber) {

  const params = {
    access_key: aviationStackApi,
    flight_iata: flightNumber
  }

  const response = await axios(aviationStackEndpoint, {params});
  return response.data;
  }

tracking.post('/tracking', async (req, res) => {
  const flightNumber = req.body.flightNumber;

  if (!flightNumber) {
    return res.status(400).json({
      message: 'Flight Number is required',
    });
  }

  let d = await trackFlight(flightNumber);
  d = d['data']
  if (d.length === 0) {
    const result = {
      message: `Flight Number: ${flightNumber} couldn't be found`
    }
    res.status(200).json(result);
  }
  else {
    d = d[0]
    const result = {
        'date': d['flight_date'],
        'status': d['flight_status'],
        'from' : d['departure']['airport'],
        'to': d['arrival']['airport'],
        'airline': d['airline']['name'],
        'flight': d['flight']['iata']
      }
    res.status(200).json(result);
  }
  
});

