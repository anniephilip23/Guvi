const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	userInput = data.split(" ")
  var a, b;
  [a,b] =userInput;
  var b = parseInt(b);
  if (a=='January'||a=='March'||a=='May'||a=='July' ||a=='August'||a=='October'||a=='December'){
  console.log(11);}
  else if(a=='April' ||a=='June' ||a=='September' ||a=='November'){
  console.log(10);}
   else if(a=='February'){
     var c = b%4
     if (c==0){console.log(10)}
     else{console.log(9)}}
})
