const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
  var x = data.split(" ");
  var a, b;
  [a,b] = x;
  var c = a+b;
  if (c%2 == 0)
  {console.log('even')}
  else{
	console.log('odd')}
});
