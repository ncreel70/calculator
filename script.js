const display = document.getElementById('displayOutput');
let preValue = '';
let postValue = '';
let mathOperator = '';
let solution = '';
let regexNumber = /[^0-9]/g

const numButtonPress = (num) => {
    if (display.textContent === '0' && mathOperator === ''){
        preValue = num;
        display.textContent = preValue;
    } else if (display.textContent.length < 10 && mathOperator === '') {
        display.textContent += num;
    } else {
        postValue = num;
    }
}

const operatorButtonPress = (operator) => {
    mathOperator = operator;
    if(postValue != '') {
        switch (operator) {
            case '+':
                solution = preValue + postValue;
                preValue = solution;
                display.textContent = solution;
                break;
            case '-':
                solution = preValue - postValue;
                display.textContent = solution;
                preValue = solution;
                break;
            case '*':
                solution = preValue * postValue;
                display.textContent = solution;
                preValue = solution;
                break;
            case '/':
                solution = preValue / postValue;
                display.textContent = solution;
                preValue = solution;
                break;

        }
    }
}