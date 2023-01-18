//to sort out the valid entry
var entryKey=["2020101","2020102","2020122","2020134","2020111","2020112","2020133","2020124"] ;
var entryNum=prompt("What's your entry key?");

var checkKey=entryKey.includes(entryNum);

if(checkKey==true){
    alert("welcome "+entryNum+" to the portal.");

}else{
    alert("sorry not a valid user.");
}
