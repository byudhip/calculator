"use strict";

// const d = document.querySelector('');
// const a = document.querySelector('');
// const b = document.querySelector('');
// const c = document.querySelector('');

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const num1 = 0;
const num2 = 0;
const operator = "";

const operate = (num1, num2, operate) => {
  switch (operate) {
    case "+":
      return add(num1, num2);
      break;
    case "-":
      return subtract(num1, num2);
      break;
    case "*":
      return multiply(num1, num2);
      break;
    case "/":
      
  }
};

console.log(add(1, 2));
console.log(subtract(8, 23));
console.log(multiply(21, 12));
console.log(divide(213, 24));
