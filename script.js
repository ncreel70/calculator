const display = document.getElementById('displayOutput');
let firstOperand = '';
let secondOperand = '';
let operator = '';
let solution = '';

const numButtonPress = (num) => {
    if (display.textContent === '0' && solution == ''){
        firstOperand = num;
        display.textContent = num;
    } else if (display.textContent.length < 10 && solution == '') {
        display.textContent += num;
        firstOperand = display.textContent;
    } else if (firstOperand == '') {
        display.textContent = '';
        firstOperand = num;
        display.textContent = num;
    } else if (display.textContent.length < 10) {
        display.textContent += num;
        firstOperand = display.textContent;
    }
}

const operatorButtonPress = (operatorButton) => {
    if (secondOperand == '') {
        operator = operatorButton;
        display.textContent = '';
        secondOperand = firstOperand;
        firstOperand = '';
    } else if (secondOperand != '') {
        equalityButtonPress();
        operator = operatorButton;
        secondOperand = solution;
        firstOperand = '';
    }
}

const equalityButtonPress = () => {
    switch (operator) {
        case '+':
            solution = parseInt(secondOperand) + parseInt(firstOperand);
            display.textContent = solution;
            break;
        case '-':
            solution = parseInt(secondOperand) - parseInt(firstOperand);
            return display.textContent = solution;
        case '*':
            solution = parseInt(secondOperand) * parseInt(firstOperand);
            return display.textContent = solution;
        case '/':
            solution = parseInt(secondOperand) / parseInt(firstOperand);
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