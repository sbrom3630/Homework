'use strict';
console.log(convertToCelsius(25));
console.log(convertToFarenheit(25));
console.log(convertToCelsius(32));
console.log(convertToFarenheit(0));

const temp = +prompt('Enter a temperature to convert');
let unit = prompt('Press C to convert from Farenheit to Celsius\nPress F to convert from Celsius to Farenheit');
while (unit === null || (unit.toUpperCase() !== 'F' && unit.toUpperCase() !== 'C')) {
    unit = prompt('Invalid entry.\nPress C to convert from Farenheit to Celsius\nPress F to convert from Celsius to Farenheit');
}
alert(`Converted Temperature: ${convertTemp(unit, temp)}°${unit.toUpperCase()}`);

function convertTemp(unit, temp) {
    if (unit.toUpperCase() === 'F') {
        return convertToFarenheit(temp);
    } else if (unit.toUpperCase() === 'C') {
        return convertToCelsius(temp);
    }
}

function convertToFarenheit(temperature) {
    return temperature / 5 * 9 + 32;
}

function convertToCelsius(temperature) {
    return (temperature - 32) * 5 / 9;
}