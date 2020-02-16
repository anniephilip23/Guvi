const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
  var a  = data.split("");
  var l = a.length;
  var b = ['a','e','i','o','u','A','E','I','O','U']
  var i;
  for(i=0;i<l;i++){
  var c  = b.includes(a[i]);
   if(c==true){a.splice(i, 1)}
 }
 
 console.log(a.join(""))});
     
