window.app = (function (module) {
    'use strict';
    module.createCounter = () => {
        let currentCount = 0;
        return {
            increment: () => { currentCount++; },
            getCount: () => currentCount
        };
    };

    return module;
}(window.app || {}));