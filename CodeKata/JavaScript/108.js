
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
  var x =parseInt(data);

  var array =[]
  for(i=1;i<=x;i++){
      var z= x%i
    if(z==0){
    array.push(i)}
  }
  var odd =[]
  
  for(j=0;j<array.length;j++){ 
    var r= array[j]%2
    if( r !=0){
    odd.push(array[j])}
  }
  console.log(odd.join(" "))
})
