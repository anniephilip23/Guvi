const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
   userdata = data.split(" ");
   var N , M;
  [N, M] =userdata;
  var c = N-M;
  if (c%2 == 0)
  {console.log('even')}
  else{
	console.log('odd')}
});
