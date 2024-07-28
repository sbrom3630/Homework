'use strict';
const chars = ['a', 'c', 'd', 's', 'l', 'e'];

console.log(myEvery(chars, letter => letter === letter.toUpperCase()));
console.log(chars.every(letter => letter === letter.toUpperCase()));

console.log(myEvery(chars, letter => letter === letter.toLowerCase()));
console.log(chars.every(letter => letter === letter.toLowerCase()));

console.log(mySome(chars, letter => letter === letter.toUpperCase()));
console.log(chars.some(letter => letter === letter.toUpperCase()));

console.log(mySome(chars, letter => letter === letter.toLowerCase()));
console.log(chars.some(letter => letter === letter.toLowerCase()));

onlyIf(chars, letter => letter === 'c' || letter === 'e', (value, index) => console.log(`Slot number ${index} contains the letter ${value}`));

const filteredChars = chars.filter(letter => letter === 'c' || letter === 'e');
filteredChars.forEach((value, index) => console.log(`Slot number ${index} contains the letter ${value}`));

// onlyIf2(chars, letter => letter === 'c' || letter === 'e', (value, index) => console.log(`Slot number ${index} contains the letter ${value}`));

function myEvery(arr, callbackFunc) {
    for (let i = 0; i < arr.length; i++) {
        if (!callbackFunc(arr[i])) {
            return false;
        }
    }
    return true;
}

function mySome(arr, callbackFunc) {
    for (let i = 0; i < arr.length; i++) {
        if (callbackFunc(arr[i])) {
            return true;
        }
    }
    return false;
}

function onlyIf(arr, testCallback, action) {
    for (let i = 0; i < arr.length; i++) {
        if (testCallback(arr[i])) {
            action(arr[i], i, arr);
        }
    }
}

// function onlyIf2(arr, testCallback, action) {
//     const filteredArray = arr.filter(testCallback);
//     filteredArray.forEach(action);
// }