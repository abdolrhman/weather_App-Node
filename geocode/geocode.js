const request = require('request')

var geocodeAdress = (input, callback) => {
  var encodeAdres= encodeURIComponent(input);
  request({
    url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodeAdres}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to Connect to Google server');
    } else if (body.status === 'ZERO_RESULTS') {
      callback('the Address Cannot be Find');
    } else if (body.status === 'OK') {
      callback(undefined, {
        Address: body.results[0].formatted_address,
        Latitute: body.results[0].geometry.location.lat,
        langutite: body.results[0].geometry.location.lng,
      })
    } else {
      callback('Unable to Connect to server');
    }
  })

}
module.exports.geocodeAdress = geocodeAdress
