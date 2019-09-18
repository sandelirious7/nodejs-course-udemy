const request = require('request')

const geocode = (address, callback) => {
    const url = `http://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1Ijoic2FuZGVsaXJpb3VzNyIsImEiOiJjanV6ODFpdXQwMmk2M3pxbGl1Ymp1cXdvIn0.1hiM31AmLxIZQrYiUsuYiA&limit=1`
    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!')
        } else if (body.features.length === 0) {
            callback('Unable to find location!')
        } else {
            const { features } = body
            const { center, place_name } = features[0]
            const latitude = center[1]
            const longitude = center[0]
            callback(undefined, {
                latitude: latitude,
                longitude: longitude,
                location: place_name
            })
        }
    })
}

module.exports = geocode
