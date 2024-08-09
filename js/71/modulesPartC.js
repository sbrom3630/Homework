(function () {
    'use strict';
    const countFiveTimes = window.app.createCounter();
    const countFifteenTimes = window.app.createCounter();
    for (let i = 0; i < 15; i++) {
        if (i < 10) {
            window.app.counter.increment();
        }

        if (i < 5) {
            countFiveTimes.increment();
        }
        countFifteenTimes.increment();
    }

    console.log(window.app.counter.getCount(), countFiveTimes.getCount(), countFifteenTimes.getCount());
    console.log(`Counter creator made ${countFiveTimes.getTotalCounters()} counters.`);
}());