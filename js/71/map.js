(function () {
    'use strict';
    function map(arr, callback) {
        const newArray = [];
        arr.forEach(element => newArray.push(callback(element)));
        return newArray;
    }

    const nums = [1, 2, 3, 4, 5];
    const nums2 = map(nums, e => e * 2);
    console.log(`Original Array: ${nums}, New Array: ${nums2}`);
}());