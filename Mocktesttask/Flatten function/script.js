
var arrnew =[]
function flatten(a){  
 var arr = a.map(function(value){
     var typ = typeof(value)
     if(typ=="object"){
        flatten(value)
     }
     else{
        arrnew.push(value)
     }
})
}
flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);
console.log(arrnew)
