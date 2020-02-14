const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data) => {
   var N = data.split("") ;
   var x = N.reverse();
  var y =x.join("");
  console.log(y)
  });
      
