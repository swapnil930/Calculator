// Function to update the screen with the given value
function updateScreen(value) {
    document.getElementById("screen").value += value;
}

// Function to clear the screen
function clearScreen() {
    document.getElementById("screen").value = '';
}

// Function to evaluate the expression and display the result
function calculateResult() {
    let expression = document.getElementById("screen").value;
    let result = eval(expression);
    document.getElementById("screen").value = result;
}

// Function to handle button clicks for digits
function handleDigitClick(digit) {
    updateScreen(digit);
}

// Function to handle button click for operators
function handleOperatorClick(operator) {
    updateScreen(operator);
}

// Function to handle button click for clearing the screen
function handleClearClick() {
    clearScreen();
}

// Function to handle button click for calculating result
function handleEqualClick() {
    calculateResult();
}

// Example usage:

function getSeven() {
    handleDigitClick('7');
}

function getEight() {
    handleDigitClick('8');
}

function getNine() {
    handleDigitClick('9');
}

function getPlus() {
    handleOperatorClick('+');
}

function getFour() {
    handleDigitClick('4');
}

function getFive() {
    handleDigitClick('5');
}

function getSix() {
    handleDigitClick('6');
}

function getMinus() {
    handleOperatorClick('-');
}

function getOne() {
    handleDigitClick('1');
}

function getTwo() {
    handleDigitClick('2');
}

function getThree() {
    handleDigitClick('3');
}

function getMulti() {
    handleOperatorClick('*');
}

function getClear() {
    handleClearClick();
}

function getZero() {
    handleDigitClick('0');
}

function getEqual() {
    handleEqualClick();
}

function getDivide() {
    handleOperatorClick('/');
}

