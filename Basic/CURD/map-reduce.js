// let newArray=arr.map(callback(currtValue[,index[,array]]){
//     return-element-for-newArray, after executing something 
// }[,thisArg])

//returns a new array cotaining the result of callig a function on evrey element in this array\

const array1=[1,4,9,16,25];

let newArray=array1.map((currElem,inex,arr)=>{
    return currElem>9;
})

console.log(array1);
console.log(newArray);

let newArr=array1.map((currElem,index,arr)=>{
    return `Index no=${index} and the value is ${currElem} belong to ${arr}` 
})

console.log(array1);
console.log(newArr);

//it returns the new array without mutating the original array

//Question
//square root of ele in array

let arr=[25,36,49,64,81];

let arrSqr=arr.map((currEle)=>{
    return Math.sqrt(currEle);
})
console.log(arrSqr)

//multiply by 2 and return more thn 10

let arr2=[2,3,4,6,8];

let array=arr2.map((currElem)=>{
    return currElem*2;
}).filter((curEle)=>{
    return curEle>10;
})
console.log(array);

//or

// let array=arr2.map((currElem)=>currElem*2).filter((curEle)=>curElem>10);
// console.log(array);


//Reduce method
// method executes a reducer function(that you provide) on each element of the array, resulting in single output Value.

//takes four argument 

// Accumulator 
// current values 
// current index 
// Source array

