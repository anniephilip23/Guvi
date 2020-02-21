const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	var x =data.split("");
	var y =x.length
	var sum =0;
	var r = y-1
	for (var i=0;i<y;i++){
	    var z=parseInt(x[i])*2**r
	    r = r-1
	    sum =  parseInt(sum) + parseInt(z)
	}
	console.log(sum)
  
});
