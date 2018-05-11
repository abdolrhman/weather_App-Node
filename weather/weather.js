const request = require('request')

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/18548e2f77b80447a058aa1fde4be56b/${lat},${lng}`,
    json: true,
  }, (error, response, body) => {
    if (error) {
      callback('some error');

    } else if (response.statusCode === 200) {
      callback(undefined, {
        temp: body.currently.temperature,
        apperantTemp: body.currently.apparentTemperature
      });
    }
  });
};

module.exports.getWeather = getWeather;
