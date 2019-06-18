const request = require('request')


const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/8abdf8e4ce69e6e8e4cda28db2eb7116/${latitude},${longitude}?units=si`

    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!')
        } else {
            if (body.code === 400) {
                callback('Unable to find location!')
            } else {
                const daily = body.daily
                const currently = body.currently
                const message = `${daily.data[0].summary} It is currently ${currently.temperature} degrees out. There is a ${currently.precipProbability}% chance of rain.`
                callback(undefined, message);
            }
        }
    })
}

module.exports = forecast