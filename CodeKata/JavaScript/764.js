
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
	userInput.push(data);
});

inp.on("close", () => {
  var a, b;
  [a, b] = userInput;
  a1 = parseInt(a);
  b1 = parseInt(b)
  c = a1*b1;
	console.log(c)
});
