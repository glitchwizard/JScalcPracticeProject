var add = function(a,b) {
	a = parseInt(prompt("What's the first number to add?"));
  b = parseInt(prompt("What will you add to it?"));
  alert(a + b);
}
var subtract = function(a,b) {
	a = prompt("What's the first number to be subtracted?");
  b = prompt("What will you subtract from it?");
  alert(a - b);
}

var multiply = function(a,b){
	a = prompt("What's the first number to be multiplied?");
  b = prompt("What will you multiply it by?");
  alert(a * b);
}

var divide = function(a,b){
	a = prompt("What's the first number to be divided?");
  b = prompt("What will you divide it by?");
  alert(a / b);
}

var calculate = function(operation){
  operation = prompt("Would you like to: Add, Subtract, Multiply or Divide?");
  alert("Ok great, you want to " + operation + "!");
  operation = operation.toUpperCase();

  switch (operation) {
    case "ADD":
      add();
      break;

    case "SUBTRACT":
      subtract();
      break;

    case "MULTIPLY":
      multiply();
      break;

    case "DIVIDE":
      divide();
      break;

    default:
      alert("You didn't enter the operation correctly, please type Add, Subtract, Multiply or Divide.")
  }

}

calculate();
