"use strict";

function calcMin(a, b) {
    let min;
    a < b ? min = a : min = b;

    return min;
}

function calcPow(x, n) {
    let result = 1;
    while (n--) {
        result *= x;
    }
    return result;
}

let x = prompt('Enter x', '');
let n = prompt('Enter n', '');

if (n >= 1 && n%n == 0) {
    alert(calcPow(x, n));
} else {
    alert('n doesn\'t match input requirements. Try again.');
}
