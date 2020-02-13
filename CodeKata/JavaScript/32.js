const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
  var n = parseInt(data);
  if(n<=100000){
    var sum =n;
    var v =n;
  for(i=0;i<n;i++){
    sum = sum+(v-1)
    v -=1
  }}
	console.log(sum)
});
