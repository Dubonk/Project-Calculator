const clearAll = document.querySelector('.clear');
const display = document.querySelector('.results');
const container = document.querySelector('.calculator-container');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const deleteLastNum = document.querySelector('.delete');
const equals = document.querySelector('.equals');
const previous = document.querySelector('.lastResults');
let previousNum;
let newNum;
let savedOp;


function add(a, b) {
   return a + b;
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

function operate(previousNum, newNum, savedOp) {
  switch (savedOp) {
    case "+":
      return add(previousNum, newNum);
    case "-":
      return subtract(previousNum, newNum);
    case "*":
      return multiply(previousNum, newNum);
    case "/":
      return divide(previousNum, newNum);
  }
  
};



deleteLastNum.addEventListener('click', () => {
  display.textContent = display.textContent.slice(0, -1);
});

clearAll.addEventListener('click', () => {
  display.textContent = '';
  previous.textContent = '';
})

equals.addEventListener('click', () => {
  newNum = Number(display.textContent);
  display.textContent = operate(previousNum, newNum, savedOp);
  previousNum = display.textContent;
});

operators.forEach(operator => {
  operator.addEventListener('click', (e) => {
    previousNum = Number(display.textContent);
    savedOp = e.target.textContent;
    display.textContent = '';
    });
    
})

numbers.forEach(number => {
  number.addEventListener('click', () => {
    display.textContent = number.value;
  })
});
//console.log(previousNum, savedOp, newNum);