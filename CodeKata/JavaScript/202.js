const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
  var r = data.split(" ");
  var a, b,x;
  var a = parseInt(a);
  var b = parseInt(b); 
  var x = parseInt(x);
  [a,b,x] = r;
  var z = a*x;
  var y = parseInt(z)+parseInt(b);
  console.log(y);
  });
