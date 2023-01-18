//Reverse a string in real time

function reverseString(){
    var str=document.getElementById("revString").value;
    var newString="";
    for(var i=str.length-1;i>=0;i--){
        newString+=str[i];
    }
    document.getElementById("resString").value=newString;
}