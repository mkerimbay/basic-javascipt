# Real-Time Flight tracking and schedule app

For this Midterm Project, I will be using upstream API from Aviation Stack (aviationstack.com) to track flights and get real-time tableau of scheduled and active flights

## Instructions on setting up environment variables:
- Signup on page https://aviationstack.com/signup/free, there is 1000 free api limits per month
- Once registered, head to dashboard and copy <access_key>
- paste access_key in .env file

## API endpoints

### 1) Endpoint: /tracking

Description: gets the realtime latest status of the flight with provided flightNumber

Method: POST


Request body:
```bash
{
  "flightNumber": "TK351"
}
```

Response body:
```bash
{
  "date": "2023-10-24",
  "status": "Active",
  "from": "IST",
  "to": "JFK",
  "airline": "Turkish Airlines",
  "flight": "TK351"
}
```

Error responses:
400 Bad Request: Flight number is required.
200 OK: Flight could not be found.

### 2) Endpoint: /departures

Description: Gets the realtime scheduled flights from the Airport with provided airport code

Method: POST

Request body:
```bash
{
  "airportCode": "SFO"
}
```

Response body:
```bash
{
    "message": "scheduled flights from: San Francisco International airport",
    "flights": [
        {
            "date": "2023-10-25",
            "status": "scheduled",
            "scheduled": "2023-10-25T10:15:00+00:00",
            "to": "Portland International",
            "airline": "British Airways",
            "flight": "BA2984"
        },
        {
            "date": "2023-10-25",
            "status": "scheduled",
            "scheduled": "2023-10-25T12:55:00+00:00",
            "to": "San Diego International Airport",
            "airline": "Singapore Airlines",
            "flight": "SQ1434"
        }, .. ]
}
```

Error responses:
400 Bad Request: Airport Code is required.
200 OK: Airport could not be found.

### 3) Endpoint: /arrivals

Description: Gets the realtime active flights destined to the Airport with provided airport code

Method: POST

Request body:
```bash
{
  "airportCode": "SFO"
}
```

Response body:
```bash
{
    "message": "active flights to: San Francisco International airport",
    "flights": [
        {
            "date": "2023-10-26",
            "status": "active",
            "scheduled": "2023-10-25T22:20:00+00:00",
            "from": "Hong Kong International",
            "airline": "Cathay Pacific",
            "flight": "CX872"
        },
        {
            "date": "2023-10-25",
            "status": "active",
            "scheduled": "2023-10-25T16:05:00+00:00",
            "from": "Frankfurt International Airport",
            "airline": "United Airlines",
            "flight": "UA59"
        }, ... ]
}
```

Error responses:
400 Bad Request: Airport Code is required.
200 OK: Airport could not be found.