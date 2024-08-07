(function () {
    'use strict';
    function getRandomNumber() {
        return Math.floor(Math.random() * 256);
    }
    function getRandomRgb() {
        return `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
    }

    let bodyStyle = document.querySelector('body').style;
    let interval;
    document.querySelector('button').addEventListener('click', function () {
        if (!interval) {
            interval = setInterval(() => {
                bodyStyle.backgroundColor = getRandomRgb();
                bodyStyle.color = getRandomRgb();
            }, 1000);
            this.innerText = 'Stop';
        } else {
            clearInterval(interval);
            interval = null;
            this.innerText = 'Continue';
        }
    });
}());