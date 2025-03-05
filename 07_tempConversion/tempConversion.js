const convertToCelsius = function(fahrenheit) {
    let result = (5/9)*(fahrenheit-32)
    return parseFloat(result.toFixed(1))
};

const convertToFahrenheit = function(celsius) {
  let result = celsius*(9/5) + 32
    return parseFloat(result.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
