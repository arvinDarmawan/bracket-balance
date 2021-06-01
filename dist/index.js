"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_1 = require("readline");
var isBalance_1 = require("./isBalance");
var readline = readline_1.createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('Input data : ', function (data) {
    if (data.trim().length === 1 || data.trim().length > 100000) {
        console.error('Data must be more than 1 and less or equal with 100,000');
    }
    else {
        console.log(isBalance_1.isBalance(data));
    }
    readline.close();
});
