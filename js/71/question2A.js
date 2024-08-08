window.app = (function (module) {
    'use strict';
    let currentCount = 0;
    module.counter = {
        increment: () => { currentCount++; },
        getCount: () => currentCount
    };

    return module;
}(window.app || {}));