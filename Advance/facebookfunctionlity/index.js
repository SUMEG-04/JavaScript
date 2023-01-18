
let database=[{

    userName:"sumeg",
    password:"sharnagat",

}];

let stat=[{
    user:"ayushjammy",
    userstatus:"currently a student"
},{
    user:"akiigamer",
    userstatus:"persuing to be a economist"
}];

const userName=prompt("Enter username");
const password=prompt("Enter password");
const login=(user,pass)=>{
    if(user===database[0].userName && pass===database[0].password){
        console.log(stat);
    }
    else{
        alert("username or password incorrect");
    }
};
login(userName,password);