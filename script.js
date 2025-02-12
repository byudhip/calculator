"use strict";

const mainDispText = document.querySelector(".main-dsp");
const numBtnNodes = document.querySelectorAll(".num-btn");
const opBtn = document.querySelectorAll(".op-btn");
const miscBtn = document.querySelectorAll(".misc-btn");
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
    } else if (mainDispText.innerText === "0" || mainDispText.innerText === "LEMAW" && !operator) {
      mainDispText.innerText = btn.innerText === "." ? 0 : "";
      mainDispText.innerText += btn.innerText;
      num1 = mainDispText.innerText;
      console.log(num1);
      console.log(typeof num1);
    } else if (num1.length < 12 && !operator) {
      mainDispText.innerText += btn.innerText;
      num1 = mainDispText.innerText;
      console.log(`This is num1 value ${num1}`);
      console.log(typeof num1);
    } else if (num1 && operator) {
      console.log(typeof num2, num2);
      mainDispText.innerText = num2;
      mainDispText.innerText += btn.innerText;
      num2 = mainDispText.innerText;
      console.log(`This is num2 value ${num2}`);
      console.log(typeof num2);
    } else if (num1.length === 12 || num2.length === 12) {
      alert("Number is outside operating range");
    }
  });
});

opBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.target.style.backgroundColor = "#ff913b";
    setTimeout(() => {
      e.target.style.backgroundColor = "#f57d1f";
    }, 100);
    if (operator.length > 0 && btn.innerText !== "=") {
      alert("No consecutive operators allowed");
    } else if (btn.innerText !== "=") {
      operator += btn.innerText;
      console.log(operator);
      console.log(typeof operator);
    } else if (btn.innerText === "=") {
      num1 = Number(num1);
      num2 = Number(num2);
      if (num2 === 0 && operator === "/") {
        mainDispText.innerText = "LEMAW";
        num1 = "";
        num2 = "";
        operator = "";
      } else {
        mainDispText.innerText = operate(num1, operator, num2);
        num1 = mainDispText.innerText;
        num2 = "";
        operator = "";
      }
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
