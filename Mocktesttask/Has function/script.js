function has(a,b){
    var obj = b
    // getting keys from the input object
    var key = Object.keys(obj)
    //ti chk input value is inkeys
    var flag = false;
    for(i=0;i<key.length;i++){
        var d = key[i]
        if(d==a){
            flag = true
        }
    }
    return flag
}

console.log(has("name", { name: "alice" }))
console.log(has("name", { name: "one" }))
console.log(has("name", {}))