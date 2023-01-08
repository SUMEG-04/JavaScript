var x=0;
var y1='hello there';
console.log(x);


    console.log(y1);
    //not within the scope
    console.log(y2);
    console.log(y3);
    console.log(y4);

f1();
function f1(){
    //debugger;
    var localvar='hello world';
    var y2='inside f1';
    console.log(x);
    
    console.log(y2);
    console.log(y1);
    //not within the scope
    console.log(y3);
    console.log(y4);

    f2();
    function f2(){
        //debugger;
    var localvar1='hey user';
    var y3='inside f2';
    console.log(x);

    console.log(y3);
    console.log(y2);
    console.log(y1);
    //not within the scope
    console.log(y4);

    f3();
    function f3(){
        //debugger;
        var localvar2='Howdy';
       var y4='inside f3';
       console.log(x);

       //climb up the scope chain
       console.log(y4);
       console.log(y3);
       console.log(y2);
       console.log(y1);
       

    }
    }
}

//if you are wondring why this isn't showing any output then go to inspect and click on console
//if you are wondring how and is debugger doing remove it and rewrite it and see the difference
