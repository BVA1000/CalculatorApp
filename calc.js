const userInput = document.getElementById('display');
let expression = '';

//Displays the Input of the Calculator
function press(num) {
  expression += num;
  display.value = expression;
}

function equal() {
  display.value = eval(expression);
  expression = '';
}

function erase() {
  expression = '';
  display.value = expression;
}

//Does not work yet :(
function percent(num) {
  expression = parseFloat(num) / 100;
  display.value = expression;
}
