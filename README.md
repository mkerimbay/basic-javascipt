# basic-javascipt

# most used commands for this repo
git push origin main

[web-server]
npm run start

[find ip address using ngrok]

terminal: 
-brew install ngrok/ngrok/ngrok
-ngrok config add-authtoken <token>, token from ngrok dashboard
start a tunnel to your https:localhost:port
-ngrok http https://localhost:8080
visit provided link {to get your ip}

send your ip to ip2location.com to receive back location details

[https server]
openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
