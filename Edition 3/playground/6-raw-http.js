const https = require('https')

const url = `https://api.darksky.net/forecast/8abdf8e4ce69e6e8e4cda28db2eb7116/40,-75?units=si`

const request = https.request(url, (response) => {

    let data = ''
    
    response.on('data', (chunk) => {
        data += chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()
