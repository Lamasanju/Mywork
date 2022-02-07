let number1, number2, userSelection, result;

let resultElement= document.getElementById("result");

function updateValues() {
    let n1 = document.getElementById("firstNumber").value;
    let n2 = document.getElementById("secondNumber").value;
    userSelection = document.getElementById("userSelection").value;

    number1 = ~~n1;
    number2 = ~~n2;

}

function calculate() {
   
    updateValues();

    (userSelection == "a") && (result = number1 + number2);
    (userSelection == "s") && (result = number1 - number2);
    (userSelection == "d") && (result = number1 / number2);
    (userSelection == "m") && (result = number1 * number2);

    resultElement.innerHTML = result;


}

function add() {
    updateValues();

    result = number1 + number2;

    resultElement.innerHTML = result;

}

function subtract() {
    updateValues () ;

    result = number1 - number2;
    resultElement.innerHTML = result;

}