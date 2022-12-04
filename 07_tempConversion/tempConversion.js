const convertToCelsius = function(n) {
  let result = (n-32)*(5/9);
  return parseFloat(result.toFixed(1));
};

const convertToFahrenheit = function(n) {
  let result = (n*(9/5)) + 32;
  return parseFloat(result.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
