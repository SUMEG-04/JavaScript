var animal=["cow","dog","cat","bird"];

animal.forEach(function(elements,index,array){
    console.log(elements+" index :"+index);
});

//pet arrow function
animal.forEach((elements,index,array)=>{
    console.log(elements+" index :"+index);
})