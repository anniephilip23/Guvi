const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
  var a = parseInt(data);
  var i;
  var flag = true;
  for(i=2;i<a;i++){
  if(a%i ==0){
  flag = false;
  break;}
  }
  if (flag == true){console.log('yes')}
  else {console.log('no')}
  });
