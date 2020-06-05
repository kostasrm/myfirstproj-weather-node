const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=3a4da1c16c82fed4a1d2e6385287daab&query=${latitude},${longitude}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect');
    } else if (body.error) {
      callback('Unable to find location');
    } else {
      undefined, callback(`${body.current.weather_descriptions[0]} 
      It is currently: ${body.current.temperature}
       degrees out. It feels like: ${body.current.feelslike} degrees out. The humidity is
       ${body.current.humidity}%`);
    }

  });
};

module.exports = forecast;




