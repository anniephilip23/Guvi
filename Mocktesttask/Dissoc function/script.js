function dissoc(a,b){
    var obj = b
    // getting keys from the input object
    var key = Object.keys(obj)
    //ti chk input value is inkeys
    for(i=0;i<key.length;i++){
        var d = key[i]
        if(d==a){
            delete obj[d]
        }
    }
    return obj
}

console.log(dissoc("b", { a: 1, b: 2, c: 3 }))
