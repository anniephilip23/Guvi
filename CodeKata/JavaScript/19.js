const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
  var r = data.split(" ");
  var a, b,x;
  [a,b,x] = r;
  var a = parseInt(a);
  var b = parseInt(b); 
  var x = parseInt(x);
  var SA = 2*a*b + 2*a*x+2*x*b;
  var v = a*b*x;
  var z = [SA, v]
  console.log(z.join(" ") );
  });
