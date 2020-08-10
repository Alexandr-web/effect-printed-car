'use strict';

let block = document.querySelector('.block');

let word = `
(function(arr) {
    let count = -1;
    arr.split('');

    let interval = setInterval(() => {
        count++;
        if (count > arr.length - 1) return setInterval(interval);
        block.innerHTML += arr[count];
    }, 1);
})(words);
`;

(function(arr) {
    let count = -1;
    arr.split('');

    let interval = setInterval(() => {
        count++;
        if (count > arr.length - 1) return setInterval(interval);
        block.innerHTML += arr[count];
    }, 100);
})(word);