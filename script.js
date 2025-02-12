"use strict";

const mainDispText = document.querySelector(".main-dsp");
const numBtnNodes = document.querySelectorAll(".num-btn");
// const b = document.querySelector("");
// const c = document.querySelector("");

let num1 = "";
let operator = "";
let num2 = "";

const operate = (num1, operator, num2) => {
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => a / b;

  switch (operator) {
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
      return divide(num1, num2);
      break;
  }
};

numBtnNodes.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.target.style.backgroundColor = "#FF43A7";
    setTimeout(() => {
      e.target.style.backgroundColor = "#f72798";
    }, 100);
    // mainDispText.innerText = "";
    if (btn.innerText === "." && mainDispText.innerText.includes(".")) {
      alert("No multiple dots allowed");
    } else {
      mainDispText.innerText += btn.innerText;
      num1 = Number(mainDispText.innerText);
      console.log(num1);
      console.log(typeof num1);
    }
  });
});



// console.log(add(1, 2));
// console.log(subtract(8, 23));
// console.log(multiply(21, 12));
// console.log(divide(213, 24));

// console.log(operate(1,"+",2));
// console.log(operate(1,"-",2));
// console.log(operate(1,"*",2));
// console.log(operate(1,"/",2));
