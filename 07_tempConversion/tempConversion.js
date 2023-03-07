const convertToCelsius = function (far) {
  let celcius = (far - 32) * 5 / 9;

  return Math.round(celcius * 10) / 10;
};

const convertToFahrenheit = function (celcius) {
  let far = (9 / 5) * celcius + 32

  return Math.round(far * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
