const nmbrs = document.getElementsByClassName('n');
const screen = document.getElementById('screen');
const equal = document.getElementById('e');
let eq = equal.addEventListener('click', e => {
    return 1;
})

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

function getNumber() {
    for (var i = 0; i < nmbrs.length; i++) {
        nmbrs.item(i).onclick = e => {
            screen.textContent = (e.target.textContent);
        }
    }
}



function main() {
    let list = [];

    if (!equal) {
        for (var i = 0; i < nmbrs.length; i++) {
            nmbrs.item(i).onclick = e => {
                screen.textContent = (e.target.textContent);
                list.push(screen.textContent);
            }
        }
        
    }
    console.log(list);
}

main();