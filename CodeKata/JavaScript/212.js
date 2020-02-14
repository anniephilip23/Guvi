const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
	userInput.push(data);
});

inp.on("close", () => {
  var a, r;
   [a,r]= userInput;
  var a = parseInt(a);
  var r =r.split(" ");
  var a = parseInt(a);
  var x = [0];
  for (i=0;i<a;i++){
      var z = parseInt(r[i])
    if(z<0){
        x.push(z)
    };
     }
 var sum= x.reduce(myFunc);
function myFunc(total, num) {
  return total + num;
}
console.log(sum)
});
