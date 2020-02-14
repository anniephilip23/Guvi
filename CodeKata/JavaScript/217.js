const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
  var d  = data.split(" ");
  var a, b;
  [a,b] =d;
  a = parseInt(a);
  b = parseInt(b);
  if(1 <= a <= 5 <= b <= 50){
	console.log(Math.pow(a, b))}
});
