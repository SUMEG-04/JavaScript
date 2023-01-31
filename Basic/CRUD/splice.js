//all curd operation and return deletd array

const months=['jan','feb','april','june','july'];

// const newMonth=months.splice(4,0,"dec");
// console.log(months);

//push
const newMonth=months.splice(months.length,0,"dec");
console.log(months);

console.log(newMonth);

//update
const updateMonth=months.splice(1,1,'Feb');
console.log(months);

//update 
const indexOfMonth=months.indexOf('april');
if(indexOfMonth != -1){
    const updateMonth=months.splice(indexOfMonth,1,'April');
    console.log(months);
}
else{
    console.log("no such data found");
}

//pop
// const indxOfMonth=months.indexOf('june');
// if(indxOfMonth != -1){
//     const updateMonth=months.splice(indxOfMonth,1);
//     console.log(months);
// }
// else{
//     console.log("no such data found");
// }


//delete all after june
const indxOfMonth=months.indexOf('june');
if(indxOfMonth != -1){
    const updateMonth=months.splice(indxOfMonth,Infinity);
    console.log(months);
}
else{
    console.log("no such data found");
}