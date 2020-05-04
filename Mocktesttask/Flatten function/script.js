function flatten(a){
    //flat infinity method is used
    var result = a.flat(Infinity)
    console.log(result)
}

flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);