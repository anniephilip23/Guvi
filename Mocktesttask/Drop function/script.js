function drop(a,b){
    b.splice(a, 1)
    console.log(b)
}

drop(1, ["foo", "bar", "baz"]);