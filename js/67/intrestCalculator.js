'use strict';

const intrest = (function () {
    let years = 30;
    let rate = .07;
    return {
        setYears: (yrs) => years = yrs,
        setRate: (rateParam) => rate = rateParam,
        calculate: (principal) => principal * rate * years
    };
}());

intrest.setYears(25);
intrest.setRate(.055);
console.log(intrest.calculate(100000));