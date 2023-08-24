const clearAll = document.querySelector('.clear');
const display = document.querySelector('.display');
const container = document.querySelector('.calculator-container');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const deleteLastNum = document.querySelector('.delete');
const equals = document.querySelector('.equals');
const topDisplay = document.querySelector('.lastResults');
const deci = document.querySelector('#deci');
let firstNum;
let secondNum;
let savedOp;
let total;


function add(a, b) {
   return parseFloat(a) + parseFloat(b);
};

function subtract(a, b) {
  return a - b;
};

function multiply(a, b) {
  return Math.round((a * b) * 100) / 100;
};

function divide(a, b) {
  return Math.round((a / b) * 100) / 100;
};

function operate(firstNum, secondNum, savedOp) {
  switch (savedOp) {
    case "+":
     return add(firstNum, secondNum);
    case "-":
     return subtract(firstNum, secondNum);
    case "*":
     return multiply(firstNum, secondNum);
    case "/":
     return divide(firstNum, secondNum);
  }
  
};



deleteLastNum.addEventListener('click', () => {
  display.textContent = display.textContent.slice(0, -1);
});

clearAll.addEventListener('click', () => {
  display.textContent = '';
  topDisplay.textContent = '';
  savedOp = '';
})

equals.addEventListener('click', () => {
  secondNum = display.textContent;
  display.textContent = operate(firstNum, secondNum, savedOp);
  firstNum = display.textContent;
  savedOp = '';
  secondNum = '';
  topDisplay.textContent = '';
});

operators.forEach(operator => {
  operator.addEventListener('click', () => {
    savedOp = operator.textContent;
    firstNum = display.textContent;
    topDisplay.textContent = `${display.textContent} ${operator.textContent}`;
    display.textContent = '';
    });
    
})

numbers.forEach(number => {
  number.addEventListener('click', () => {
    display.textContent += number.value;
  })
});
//console.log(firstNum, savedOp, secondNum);
//topDisplay.textContent = `${display.textContent} ${operator.textContent}`;