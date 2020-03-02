function myfunction(){
    var divmain0 =document.createElement("div");
    divmain0.style= "display: flex; height: 150px;align-items: center; width:100%;justify-content: center;flex-direction: column; "
    var h = document.createElement("h1");
    h.innerHTML = 'RandomNumber'
    divmain0.appendChild(h);
    var p1 = document.createElement("p");
    p1.innerHTML = randomnumb()
    divmain0.appendChild(p1);

   function randomnumb(){
    var a =  Math.floor(Math.random() * (999999-100000 +1)) +100000;
    var b = a.toString();
    var c  = b.split("");
    var d =check(c);
    if (d==1){
        randomnumb()
    }
    else{
    return a}
   }

    function check(c){
    list = []
    for(i=0;i<=c.length;i++){
        for(j=1;j<=c.length;j++){
            if(c[i]==c[j]){
                return 1
            }
            else{return 0}
        }

    }
}

    
    document.body.appendChild(divmain0)
}