let first;
let second;
let operator;
let result;

document.getElementById("submitbutton").onclick = function() {

    first = document.getElementById("first").value;
    second = document.getElementById("second").value;
    operator = document.getElementById("operator").value;
    result = document.getElementById("result");



    if (operator == "+") {
        first = Number(first);
        second = Number(second);
        let sum = first + second;
        result.innerHTML = sum;
    }

    else if (operator == "-") {
        first = Number(first);
        second = Number(second);
        let sum = first - second;
        result.innerHTML = sum;
    }

    else if (operator == "*") {
        first = Number(first);
        second = Number(second);
        let sum = first * second;
        result.innerHTML = sum;
    }

    else if (operator == "/") {
        first = Number(first);
        second = Number(second);
        let sum = first / second;
        result.innerHTML = sum;
    }

    else if (operator == "%") {
        first = Number(first);
        second = Number(second);
        let sum = first % second;
        result.innerHTML = sum;
    }

    else {
        result.innerHTML = "something went wrong...";
    }
}