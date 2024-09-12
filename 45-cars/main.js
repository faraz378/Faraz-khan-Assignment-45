"use strict";
// Q45: Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature. 
// Print the Object that’s returned to make sure all the information was
// stored correctly?
//car function:
let CarDetails = (manifactur, model, ...detail) => {
    let carData = { manufacturer: manifactur, model: model };
    for (let [key, value] of detail) {
        carData[key] = value;
    }
    return carData;
};
console.log(CarDetails("Chrysler", "ME412"));
console.log(CarDetails("Corvette", "Z06", ["color", "gold"]));
