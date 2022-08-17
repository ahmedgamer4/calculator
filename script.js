const nmbrs = document.getElementsByClassName('n');
const screen = document.getElementById('screen');
const equal = document.getElementById('e');
const opr = document.getElementsByClassName('opr');


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

function operate(opr, a, b) {
    if (opr == "+") {
        add(a, b);
    }
    else if (opr == "-") {
        subtract(a, b);
    }
    else if (opr == "x") {
        multiply(a, b);
    }
    else if (opr == "/"){
        divide(a, b);
    }
    else {
        return 1;
    }
}

// function makeGrid(){
//     const btns = document.getElementById('num-opr')
//     btns.style.setProperty('--grid-rows', 4);
//     btns.style.setProperty('--grid-cols', 4);

//     for(i = 0; i < 16; ++i) {
//         const node = document.createElement('buttons');
//         btns.appendChild(node).className = 'node';
//     }
// }
// makeGrid();

function getNumber() {
    for (var i = 0; i < nmbrs.length; i++) {
        nmbrs.item(i).onclick = e => {
            if (screen.textContent.length > 12) {
                screen.textContent += "";
            }
            else{
                screen.textContent += (e.target.textContent);
            }
        }
    }
}

function getOperator() {
    for (var i = 0; i < opr.length; i++) {
        opr.item(i).onclick = e => {
            if (screen.textContent.length > 12) {
                screen.textContent += "";
            }
            else {
                screen.textContent = (e.target.textContent);
            }
        }
    }
}



function main() {
    let firstNum = getNumber();
    let operator = getOperator();
    screen.textContent = ""
    let secondNum = getNumber();
    equal.addEventListener('click', e => {
        console.log(operate(operator, firstNum, secondNum));
    });
}

main()