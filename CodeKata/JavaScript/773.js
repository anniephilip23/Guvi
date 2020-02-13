const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
    a=1;
	n = parseInt(data);
  for(i=n;i>0;i--){
    a *=i;
  }
  console.log(a);
});
