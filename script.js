const nmbrs = document.querySelectorAll('.n');
const screen = document.getElementById('screen');
const equal = document.getElementById('e');
const opr = document.querySelectorAll('.opr');
const clear = document.getElementById('c');

let oldNum = "";
let newNum = "";
let resultNum;
let operator;


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return  a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate() {

    oldNum = parseFloat(oldNum);
    newNum = parseFloat(newNum);

    switch (operator) {
        case "p": 
            resultNum = add(oldNum, newNum);
            break;
        
        case "s": 
            resultNum = subtract(oldNum, newNum);
            break;

        case "m":
            resultNum =  multiply(oldNum, newNum);
            break;

        case "d":
            resultNum = divide(oldNum, newNum);
            break;

        default:
            resultNum = newNum;
    }
    

    if (!isFinite(resultNum)) {
        if (isNaN(resultNum)) {
            resultNum = 'Nah we do not need NaN';
        }
        else {
            resultNum = "Wrong";
            clear.classList.add('show');
        }
    }

    screen.textContent = resultNum;
    equal.setAttribute('data-result', resultNum);

    oldNum = 0;
    newNum = resultNum;
    console.log(resultNum);
}

function clearALl() {
    oldNum = '';
    newNum = '';
    screen.textContent = '0';
    equal.setAttribute('data-result', resultNum);
}

let setNum = function () {
    if (resultNum) {
        newNum = this.getAttribute('data-num');
        resultNum = '';
    }
    else {
        newNum += this.getAttribute('data-num');
    }

    screen.textContent = newNum;
}

function moveNum() {
    oldNum = newNum;
    newNum = '';
    operator = this.getAttribute('data-ops');

    equal.setAttribute('data-result', '');
}

nmbrs.forEach(nmbr => {
    nmbr.addEventListener('click', setNum);
});

opr.forEach(op => {
    op.addEventListener('click', moveNum);
});

equal.addEventListener('click', operate);

clear.addEventListener('click', clearALl);

