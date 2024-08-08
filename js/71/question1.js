(function () {
    'use strict';
    function ourMap(arr, callback) {
        const newArray = [];
        arr.forEach(element => {
            newArray.push(callback(element));
        });
        return newArray;
    }

    const nums = [1, 2, 3, 4, 5];
    const nums2 = ourMap(nums, (e) => e * 2);
    console.log(`Original: ${nums}, New: ${nums2}`);
}());