const add = (num1, num2) => {
    return num1 + num2;
}

const subtract = (num1, num2) => {
    return num1 - num2;
}

const multiply = (num1, num2) => {
    return num1 * num2;
}

const divide = (num1, num2) => {
    return num1 / num2;
}

const operate = (operator, num1, num2) => {
    if (operator === "+")
        add(num1, num2);
    else if (operate === '-')
        subtract(num1, num2)
    else if (operate === '*')
        multiply(num1 * num2)
    else if (operate === "/")
        divide(num1, num2)
}

// populate the display when clicked button
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.digit');

// console.log(display);
// console.log(buttons);

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;
        console.log(value);
    })
})