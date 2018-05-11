const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');
const argv = yargs
  .option({
    a: {
      demand: true,
      alias: 'address',
      descripe: 'address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv

/** Address and its weather**/
var address = argv.a
geocode.geocodeAdress(address, (errorMsg, results) => {
  if (errorMsg) {
    console.log(errorMsg);
  } else {
    console.log(results.address);
    weather.getWeather(results.Latitute,results.langutite ,(errorMsg, weathResults) => {
      if (errorMsg) {
        console.log(errorMsg);
      } else {
        console.log(`its currently ${weathResults.temp}. its feel like ${weathResults.apperantTemp}`);
      }
    })
  }
})


console.log('--------------------------------------');

weather.getWeather();
// 18548e2f77b80447a058aa1fde4be56b
