import axios, {getAdapter} from "axios";
// const key = process.env.API_KEY_IP2LOCATION;
const key = "247E1F62485F571AE2FC899EC337DBCC"

// https://api.ip2location.io/?key=247E1F62485F571AE2FC899EC337DBCC&ip=209.36.108.210
export const getUserZipCode = async(userIP) => {
    console.log(userIP)
    const url = `https://api.ip2location.io/?key=${key}&ip=${userIP}`
    const locationResponse = await axios.get(url)
    
    console.log(locationResponse)
    return {"location": locationResponse?.data}
}