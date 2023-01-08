console.log("java"-"script");

//NaN(not a number) is a property of of the global object.
//variable in aglobal scope

var phoneNumber=9832651743;
var myName="sumeg";

console.log(isNaN(phoneNumber)); //it is number

console.log(isNaN(myName)); //it is not a number

if(isNaN(myName)){
    console.log("Please enter valid number");
}

console.log(NaN===NaN);
console.log(Number.NaN==NaN);
console.log(isNaN(NaN));
console.log(isNaN(Number.NaN));
console.log(Number.isNaN(NaN));