"use strict";

const mainDispText = document.querySelector(".main-disp");
const numBtnNodes = document.querySelectorAll(".num-btn");
const opBtn = document.querySelectorAll(".op-btn");
const miscBtn = document.querySelectorAll(".misc-btn");
// const c = document.querySelector("");

let num1 = "";
let operator = "";
let num2 = "";
let num1toggle = true;

const operate = (num1, operator, num2) => {
  num1 = Number(num1);
  num2 = Number(num2);
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => a / b;

  switch (operator) {
    case "+":
      if (
        Number.isInteger(num1) &&
        Number.isInteger(num2) &&
        add(num1, num2) >= 1e+15
      ) {
        alert("go buy scientific calculator");
        return 0;
      } else if (
        Number.isInteger(num1) &&
        Number.isInteger(num2) &&
        add(num1, num2) < 1e+15
      ) {
        return add(num1, num2);
      } else if (
        (!Number.isInteger(num1) ||
        !Number.isInteger(num2)) &&
        add(num1, num2) >= 1e+15
      ) {
        alert("go buy scientific calculator");
        return 0;
      } else if (
        (!Number.isInteger(num1) ||
        !Number.isInteger(num2)) &&
        add(num1, num2) < 1e+15
      ) {
        return add(num1, num2).toFixed(2);
      }
      break;
    case "-":
      if (
        Number.isInteger(num1) &&
        Number.isInteger(num2 && subtract(num1, num2)) >= 1e+15
      ) {
        alert("go buy scientific calculator");
        return 0;
      } else if (
        Number.isInteger(num1) &&
        Number.isInteger(num2) &&
        subtract(num1, num2) < 1e+15
      ) {
        return subtract(num1, num2);
      } else if (
        (!Number.isInteger(num1) ||
        !Number.isInteger(num2)) &&
        subtract(num1, num2) >= 1e+15
      ) {
        alert("go buy scientific calculator");
        return 0;
      } else if (
        (!Number.isInteger(num1) ||
        !Number.isInteger(num2)) &&
        subtract(num1, num2) < 1e+15
      ) {
        return subtract(num1, num2).toFixed(2);
      }
      break;
    case "*":
      if (
        Number.isInteger(num1) &&
        Number.isInteger(num2) &&
        multiply(num1, num2) >= 1e+15
      ) {
        alert("go buy scientific calculator");
        return 0;
      } else if (
        Number.isInteger(num1) &&
        Number.isInteger(num2) &&
        multiply(num1, num2) < 1e+15
      ) {
        return multiply(num1, num2);
      } else if (
        (!Number.isInteger(num1) ||
        !Number.isInteger(num2)) &&
        multiply(num1, num2) >= 1e+15
      ) {
        alert("go buy scientific calculator");
        return 0;
      } else if (
        (!Number.isInteger(num1) ||
        !Number.isInteger(num2)) &&
        multiply(num1, num2) < 1e+15
      ) {
        return multiply(num1, num2).toFixed(2);
      }
      break;
    case "/":
      if (
        Number.isInteger(num1) &&
        Number.isInteger(num2) &&
        divide(num1, num2) >= 1e+15
      ) {
        alert("go buy scientific calculator");
        return 0;
      } else if (
        Number.isInteger(num1) &&
        Number.isInteger(num2) &&
        divide(num1, num2) < 1e+15
      ) {
        return divide(num1, num2);
      } else if (
        (!Number.isInteger(num1) ||
        !Number.isInteger(num2)) &&
        divide(num1, num2) >= 1e+15
      ) {
        alert("go buy scientific calculator");
        return 0;
      } else if (
        (!Number.isInteger(num1) ||
        !Number.isInteger(num2)) &&
        divide(num1, num2) < 1e+15
      ) {
        return divide(num1, num2).toFixed(2);
        break;
      }
  }
};
numBtnNodes.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.target.style.backgroundColor = "#FF43A7";
    setTimeout(() => {
      e.target.style.backgroundColor = "#f72798";
    }, 100);
    if (btn.innerText === "." && mainDispText.innerText.includes(".")) {
      alert("No multiple dots allowed");
    } else if (
      (mainDispText.innerText === "0" || mainDispText.innerText === "LEMAW" || mainDispText.innerText === "undefined") &&
      !operator &&
      num1toggle
    ) {
      mainDispText.innerText = btn.innerText === "." ? "0" : "";
      mainDispText.innerText += btn.innerText;
      num1 = mainDispText.innerText;
      console.log(`This is num1 value: ${num1 || "empty string"},`, typeof num1);
    } else if (num1.length < 15 && !operator) {
      mainDispText.innerText += btn.innerText;
      num1 = mainDispText.innerText;
      console.log(`This is num1 value: ${num1 || "empty string"},`, typeof num1);
    } else if (num1 && operator && num2.length < 16) {
      num1toggle = false;
      console.log(`num1 toggle is ${num1toggle}`);
      mainDispText.innerText = num2;
      mainDispText.innerText += btn.innerText;
      num2 = mainDispText.innerText;
      console.log(`This is num2 value: ${num2 || "empty string"},`, typeof num2);
    } else if (num1.length === 15 || num2.length === 15) {
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
      num1toggle = false;
      console.log(
        `This is the value of operator: ${operator} and toggle: ${num1toggle}`
      );
    } else if (btn.innerText === "=") {
      if (num2 === "0" && operator === "/") {
        mainDispText.innerText = "LEMAW";
        num1toggle = true;
        num1 = "";
        num2 = "";
        operator = "";
      } else {
        mainDispText.innerText = operate(num1, operator, num2);
        num1 = mainDispText.innerText;
        num1toggle = false;
        num2 = "";
        operator = "";
        console.log(
          `num1 toggle is ${num1toggle}, num1 is ${num1 || "empty string"} num2 is ${num2 || "empty string"}`
        );
      }
    }
  });
});

miscBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.target.style.backgroundColor = "#00A3A3";
    setTimeout(() => {
      e.target.style.backgroundColor = "#008B8B";
    }, 100);
    if (btn.innerText === "AC") {
      mainDispText.innerText = "0";
      num1toggle = true;
      console.log(`num1 toggle is ${num1toggle}`);
      num1 = "";
      num2 = "";
      operator = "";
      console.log(
        `AC button pressed, all variables returned to their original state`
      );
    } else if (btn.innerText === "C") {
      if (
        mainDispText.innerText === "undefined" ||
        mainDispText.innerText === "LEMAW" ||
        mainDispText.innerText === "0" ||
        mainDispText.innerText === "Infinity"
      ) {
        return;
        console.log(`C button pressed, did nothing`);
      }
      mainDispText.innerText =
        (mainDispText.innerText.length <= 2 &&
        mainDispText.innerText.startsWith("-")) || mainDispText.innerText.length === 1
          ? "0"
          : mainDispText.innerText.slice(0, mainDispText.innerText.length - 1);
      console.log(`C button pressed, this is toggle value ${num1toggle}`);
      if (num1toggle) {
        num1 = mainDispText.innerText;
        console.log(`This is num1 value: ${num1 || "empty string"},`, typeof num1);
        console.log(`This is num2 value: ${num2 || "empty string"},`, typeof num2);
      } else if (!num1toggle) {
        num2 = mainDispText.innerText === "0" ? "" : mainDispText.innerText;
        console.log(`This is num1 value: ${num1 || "empty string"},`, typeof num1);
        console.log(`This is num2 value: ${num2 || "empty string"},`, typeof num2);
      }
    } else if (btn.innerText === "+/-") {
      if (!mainDispText.innerText.startsWith("-") && mainDispText.innerText !== "0") {
        mainDispText.innerText = "-" + mainDispText.innerText;
        if (num1toggle) {
          num1 = mainDispText.innerText;
          console.log(`This is num1 value: ${num1 || "empty string"},`, typeof num1);
        console.log(`This is num2 value: ${num2 || "empty string"},`, typeof num2);
        } else if (!num1toggle) {
          num2 = mainDispText.innerText;
          console.log(`This is num1 value: ${num1 || "empty string"},`, typeof num1);
        console.log(`This is num2 value: ${num2 || "empty string"},`, typeof num2);
        }
      } else if (mainDispText.innerText.startsWith("-")) {
        mainDispText.innerText = mainDispText.innerText.slice(1);
        if (num1toggle) {
          num1 = mainDispText.innerText;
          console.log(`This is num1 value: ${num1 || "empty string"},`, typeof num1);
        console.log(`This is num2 value: ${num2 || "empty string"},`, typeof num2);
        } else if (!num1toggle) {
          num2 = mainDispText.innerText;
          console.log(`This is num1 value: ${num1 || "empty string"},`, typeof num1);
        console.log(`This is num2 value: ${num2 || "empty string"},`, typeof num2);
        }
      }
    }
  });
});
