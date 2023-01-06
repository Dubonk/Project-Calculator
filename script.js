const clearAll = document.querySelector('.clear');
const display = document.querySelector('.results');
const container = document.querySelector('.calculator-container');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
let saved = '';


function add(a, b) {
  return a + b;
};

function subtract(a, b) {
  return a - b;
};

function multiply(a, b) {
  return a * b;
};

function divide(a, b) {
  return a / b;
};

function operate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
  }
};

clearAll.addEventListener('click', () => {
  display.textContent = '';
})

operators.forEach(operator => {
  operator.addEventListener('click', () => {
    saved = display.textContent;
    display.textContent = '';
  })
})

numbers.forEach(number => {
  number.addEventListener('click', () => {
    display.textContent += number.value;
  })
});