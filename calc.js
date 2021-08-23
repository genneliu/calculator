const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("What would you like to calculate?", function (input) {
  tokens = input.split(" ");

  mathSymbol = tokens[0];
  num1 = Number(tokens[1]);
  num2 = Number(tokens[2]);
  num3 = Number(tokens[3]);

  //see what console is doing

  console.log("mathSymbol", mathSymbol);
  console.log("num1", num1);
  console.log("num2", num2);
  console.log("num3", num3);

  //if statement that checks if mathSymbol is equal to string "+"

  if (mathSymbol === "+") {
    console.log(num1 + num2);
  }

  // subtraction, multriplication, division, sq rt

  if (mathSymbol === "-") {
    console.log(num1 - num2);
  }

  if (mathSymbol == "*") {
    console.log(num1 * num2);
  }

  if (mathSymbol == "/") {
    console.log(num1 / num2);
  }

  if (mathSymbol == "sqrt") {
    console.log(Math.sqrt(num1));
  }

  // square
  if (mathSymbol == "s") {
    console.log(num1 ** 2);
  }

  //cube

  if (mathSymbol == "c") {
    console.log(num1 ** 3);
  }

  //raise to given power

  if (mathSymbol == "**") {
    console.log(num1 ** num2);
  }

  //modulo

  if (mathSymbol == "%") {
    console.log(num1 % num2);
  }

  //three numbers
  if (mathSymbol == "t") {
    console.log(num1 ** num2 / num3);
  }
  // This line closes the connection to the command line interface.
  reader.close();
});
