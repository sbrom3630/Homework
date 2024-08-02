(function () {
    'use strict';
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    let buttonCounter = 1;
    document.querySelector('body').addEventListener('click', e => {
        if (e.target.tagName !== 'BUTTON') {
            return;
        }
        const newButton = document.createElement('button');
        newButton.style.backgroundColor = colors[buttonCounter % colors.length];
        newButton.innerText = ++buttonCounter;
        document.body.appendChild(newButton);
    });

    // document.querySelector('button').addEventListener('click', (createButton));
    // function createButton() {
    //     const newButton = document.createElement('button');
    //     newButton.style.backgroundColor = colors[buttonCounter % colors.length];
    //     newButton.innerText = ++buttonCounter;
    //     document.body.appendChild(newButton);
    //     newButton.addEventListener('click', createButton);
    // }
}());