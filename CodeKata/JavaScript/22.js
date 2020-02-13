const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
  userInput = data.split(" ")
  var a, b, c;
  [a,b,c] =userInput;
  var a1 = parseInt(a);
  var b1 = parseInt(b);
  var c1 = parseInt(c);
  var d = (a1*b1)%c1;
	console.log(d);
});
