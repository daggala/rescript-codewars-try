// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';


function fib(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return fib(n - 1 | 0) + fib(n - 2 | 0) | 0;
  }
}

function squareSum(numbers) {
  return numbers;
}

console.log(fib(0));

exports.fib = fib;
exports.squareSum = squareSum;
/*  Not a pure module */
