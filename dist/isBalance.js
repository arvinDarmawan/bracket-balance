"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBalance = void 0;
var stack_1 = require("./stack");
function isBalance(data) {
    var arrChars = data.split('');
    var stack = new stack_1.Stack();
    for (var i = 0; i < arrChars.length; i++) {
        var char = arrChars[i];
        if (char === '(') {
            stack.push(char);
        }
        else {
            if (stack.isEmpty()) {
                return false;
            }
            else {
                var popChar = stack.pop();
                if (popChar === ')' && char !== '(')
                    return false;
            }
        }
    }
    if (stack.isEmpty()) {
        return true;
    }
    else {
        return false;
    }
}
exports.isBalance = isBalance;
