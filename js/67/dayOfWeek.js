'use strict';

const dayUtils = (function () {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Shabbos Kodesh'];

    return {
        getDayName(dayNum) {
            if (days.some((e, index) => dayNum - 1 === index)) {
                return days[dayNum - 1];
            } else {
                return 'Invalid input';
            }
        },
        getDayNumber(day) {
            if (days.some(element => day === element)) {
                return days.findIndex((element) => element === day) + 1;
            } else {
                return 'Invalid input';
            }
        }
    };
}());

console.log(dayUtils.getDayName(7));
console.log(dayUtils.getDayNumber('Monday'));