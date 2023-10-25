import axios from 'axios'

const aviationStackEndpoint = 'http://api.aviationstack.com/v1/flights'
const aviationStackApi = process.env.access_key

async function trackFlight(dep) {

  const params = {
    access_key: '85b0109eb963419936cfe3732244c78a',
    dep_iata: dep,
    flight_status: 'scheduled'
  }

  const response = await axios(aviationStackEndpoint, {params});
  return response.data;
  }



let data = await trackFlight('ALA');

console.log(data['data'].length)
console.log(data['data'][0])
for (const d of data['data']) {
    let date = d['flight_date']
    let fno = d['flight']['iata']
    let status = d['flight_status']
    let to = d['arrival']['airport']
    console.log(date, status,fno, to)
  }
// for (let d in data['data']){
//     console.log(d['iata_code'], d['airport_name'])
// console.log(d)
// d = d['data']
// console.log(d)
// console.log(d.length)
// d = d['data'][0]
// // logic to check if we have data?
// const result = {
//     'date': d['flight_date'],
//     'from' : d['departure']['airport'],
//     'to': d['arrival']['airport'],
//     'airline': d['airline']['name'],
//     'flight': d['flight']['iata']
// }
// console.log(result);
