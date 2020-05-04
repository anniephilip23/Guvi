function drop(a,b){
    var arr  = b.filter(function(value,index){
        return index !=a;
    })
    console.log(arr)
}

drop(1, ["foo", "bar", "baz"]);
