//all curd operation and return deletd array

const months=['jan','feb','april','june','july'];

// const newMonth=months.splice(4,0,"dec");
// console.log(months);

const newMonth=months.splice(months.length,0,"dec");
console.log(months);

console.log(newMonth);

const updateMonth=months.splice(1,1,'Feb');
console.log(months);

const indexOfMonth=months.indexOf('april');
if(indexOfMonth != -1){
    const updateMonth=months.splice(indexOfMonth,1,'April');
    console.log(months);
}
else{
    console.log("no such data found");
}


const indxOfMonth=months.indexOf('june');
if(indxOfMonth != -1){
    const updateMonth=months.splice(indxOfMonth,1);
    console.log(months);
}
else{
    console.log("no such data found");
}
