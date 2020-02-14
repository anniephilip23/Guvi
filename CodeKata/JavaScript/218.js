const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
  var x = data.split(" ");
  var a ,b;
  [a,b]= x
  var a = parseInt(a);
  var b = parseInt(b)
  var z = a*b/2
  console.log(z)
});
                   
