const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	var N= parseInt(data);
   var y = N%7;
   if (y==0){
   console.log("yes")}
   else{
    console.log("no")}
    
});
