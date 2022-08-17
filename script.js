const calc = document.getElementById('calc');

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
    if (opr === "+") {
        add(a, b);
    }
    else if (opr === "-") {
        subtract(a, b);
    }
    else if (opr === "*") {
        multiply(a, b);
    }
    else {
        divide(a, b);
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