import h2 from './m';
import h3 = require('./m1');

import $ = require('jquery');

console.info(h2)
console.info(h3)
console.info($)

function myCoolFunction(f: (x: number) => void, nums: number[]): void;
function myCoolFunction(f: (x: number) => void, ...nums: number[]): void;
function myCoolFunction() {
    if (arguments.length == 2 && !Array.isArray(arguments[1])) {
        var f = arguments[0];
        var arr = arguments[1];
        // ...
    }
    // ...
}

// 尖括号声明类型
let someValue: Array<number> = [1,2];
let strLength: number = (<Array<number>>someValue).length;
console.info(strLength);

