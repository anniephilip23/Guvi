function myfunction(){
    var  input = [
        {
             "id": 1,
             "title": "Title 1",
             "childrens": [
                  {
                       "id": 2,
                       "title": "Title 2",
                       "childrens": []
                  }
             ]
        },
        {
             "id": 3,
             "title": "Title 3",
             "childrens": [
                  {
                       "id": 4,
                       "title": "Title 4",
                       "childrens": [
                            {
                                 "id": 5,
                                 "title": "Title 5",
                                 "childrens": []
                            }
                       ]
                  }
             ]
        }
   ]

 var newarray =[];
function check(array){
array.forEach(element => {
    var obj1={
        id : element.id,
        title : element.title,
         childrens : []}
    newarray.push(obj1);
if(element.childrens.length >0){
    check(element.childrens)
}

    
});
}
check(input)
console.log(newarray)
}