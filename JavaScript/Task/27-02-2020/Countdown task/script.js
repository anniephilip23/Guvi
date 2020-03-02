function myfunction(){
  
var para = document.createElement("div")
para.id ='p'

para.style= "display: flex;padding:200px;align-items: center;background-color: burlywood; width :100%;justify-content:center;color: blue;font-size: 150px;"
document.body.appendChild(para)



countdown(10)



function countdown(num){
    setTimeout(function(){
    document.getElementById("p").innerHTML = num ;
    if(num>=2){
    var x = num -1
    countdown(x);}
    if(num<=1){setTimeout(function(){
        document.getElementById("p").innerHTML = 'Winner' }, 2000)
   
    }
}, 2000)

}

}