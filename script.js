const display = document.getElementById('displayOutput');
let firstOperand = '';
let secondOperand = '';
let operator = '';
let solution = '';

const numButtonPress = (num) => {
    if (display.textContent === '0' && operator === ''){
        display.textContent = num;
        firstOperand = num;
    } else if (display.textContent.length < 10 && operator === '') {
        display.textContent += num;
        firstOperand = display.textContent;
    } else if (firstOperand != '' && secondOperand === '') {
        secondOperand = num;
        display.textContent = secondOperand;
    } else {
        display.textContent += num;
        secondOperand = display.textContent;
    }
}

const operatorButtonPress = (operatorButton) => {
    return operator = operatorButton;
}

const equalityButtonPress = () => {
    switch (operator) {
        case '+':
            solution = parseInt(firstOperand) + parseInt(secondOperand);
            return display.textContent = solution;
        case '-':
            solution = parseInt(firstOperand) - parseInt(secondOperand);
            return display.textContent = solution;
        case '*':
            solution = parseInt(firstOperand) * parseInt(secondOperand);
            return display.textContent = solution;
        case '/':
            solution = parseInt(firstOperand) / parseInt(secondOperand);
            return display.textContent = solution;
    }
}

const allClear = () => {
    firstOperand = '';
    secondOperand = '';
    operator = '';
    solution = '';
    display.textContent = '0';
}