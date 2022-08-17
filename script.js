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