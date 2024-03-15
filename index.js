const add = (num1, num2) => {
  console.log(num1 + num2);
  return num1 + num2;
};

const subtract = (num1, num2) => {
  return num1 - num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const divide = (num1, num2) => {
  return num1 / num2;
};

const operate = (operator, num1, num2) => {
  if (operator === "+") return add(num1, num2);
  else if (operator === "-") return subtract(num1, num2);
  else if (operator === "*") return multiply(num1, num2);
  else if (operator === "/") return divide(num1, num2);
};

// populate the display when clicked button
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
// console.log(buttons);
// store 2 operands and operator
let firstOperand = null;
let secondOperand = null;
let operator = null;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.value;
    console.log(value);
    // handle digits
    if (!isNaN(value)) {
      if (firstOperand === null) firstOperand = value;
      else secondOperand = value;
      display.textContent = value;
    } else {
      if (value === "+" || value === "-" || value === "*" || value === "/") {
        operator = value;
        display.textContent = value;
      } else if (value === "=") {
        let ans = operate(operator, parseInt(firstOperand), parseInt(secondOperand));
        display.textContent = ans;
        firstOperand = null;
        secondOperand = null;
      }
    }
  });
});
