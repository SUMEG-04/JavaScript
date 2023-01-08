let arr2=[2,3,4,6,8];

let array=arr2.map((currElem)=>{
    return currElem*2;
}).filter((curEle)=>{
    return curEle>10;
})
console.log(array);