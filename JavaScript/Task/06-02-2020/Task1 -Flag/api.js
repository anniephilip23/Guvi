function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}
var json_obj = JSON.parse(Get('https://restcountries.eu/rest/v2/all'));
console.log(json_obj[0]["flag"])

var first20 = [];
for(i=0;i<20;i++){
    first20.push(json_obj[i])
}
console.log(first20)

function info(x){
    document.write("Name: "+first20[x].name+"<br>");
    document.write("Alpha2 Code: "+first20[x].alpha2Code+"<br>");
    document.write("Capital: "+first20[x].capital+"<br>");
    document.write("Region: "+first20[x].region+"<br>");
    document.write("Border: ");
    for(i=0;i<first20[x].borders.length;i++){
        document.write(first20[x].borders[i]+" ");
    }
    
}
