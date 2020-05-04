function dissoc(a,b){
    var obj = b
    // getting keys from the input object
    var key = Object.keys(obj)
    //to chk input value is inkeys
    var arr  = key.filter(function(value)
    {
  return value!=a
    })
    var objNew ={}
    var map = arr.forEach(function(value){
        var x = obj[value]
        objNew[value] =x
    })
    console.log(objNew)
}
//console.log(
    dissoc("b", { a: 1, b: 2, c: 3 })
