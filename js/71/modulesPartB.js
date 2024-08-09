window.app = (function (module) {
    'use strict';
    let totalCounters = 0;
    module.createCounter = () => {
        totalCounters++;
        let currentCount = 0;
        return {
            increment: () => { currentCount++; },
            getCount: () => currentCount,
            getTotalCounters: () => totalCounters
        };
    };

    return module;
}(window.app || {}));