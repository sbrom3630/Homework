(function () {
    'use strict';
    function getRandomNumber() {
        Math.floor(Math.random() * 256);
    }
    function getRandomRgb() {
        `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
    }

    let interval;
    document.querySelector('button').addEventListener('click', function () {
        if (!interval) {
            interval = setInterval(() => {
                document.querySelector('body').style.backgroundColor = getRandomRgb();
                document.querySelector('body').style.color = getRandomRgb();
            }, 1000);
            this.innerText = 'Stop';
        } else {
            clearInterval(interval);
            interval = null;
            this.innerText = 'Continue';
        }
    });
}());