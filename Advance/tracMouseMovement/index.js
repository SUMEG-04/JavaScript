{
    //for x position 
    let mouseXStartPoint=0;
    let mouseXEndPoint=window.innerWidth;
    let currentXPosition=0;
    let fracXvalue=0;

    //for y position
    let mouseYEndPoint=window.innerHeight;
    let currentYPosition=0;
    let fracYvalue=0;

    const mouseMove=(event)=>{
        //console.log(event);
        currentXPosition=event.clientX;
        fracXvalue=currentXPosition/mouseXEndPoint;
        console.log(fracXvalue);

        currentYPosition=event.clientY;
        fracYvalue=currentYPosition/mouseYEndPoint;
        console.log(fracYvalue);
    }
    window.addEventListener('mousemove',mouseMove);
}

//if stating poiny is 300
{
    //for x position
    let mouseXStartPoint=300;
    let mouseXEndPoint=window.innerWidth;
    let currentXPosition=0;
    let fracXvalue=0;

    //for y position
    let mouseYEndPoint=window.innerHeight;
    let currentYPosition=0;
    let fracYvalue=0;

    let mouseXRange=mouseXEndPoint-mouseXStartPoint;

    const mouseMove=(event)=>{
        //console.log(event);
        currentXPosition=event.clientX-mouseXStartPoint;
        fracXvalue=currentXPosition/mouseXRange;
        console.log(fracXvalue);

        currentYPosition=event.clientY;
        fracYvalue=currentYPosition/mouseYEndPoint;
        console.log(fracYvalue);
    }
    window.addEventListener('mousemove',mouseMove);
}

//if stating point is 300 and ending is 300 from right
{
    //for x position
    let mouseXStartPoint=300;
    let mouseXEndPoint=window.innerWidth-300;
    let currentXPosition=0;
    let fracXvalue=0;

    //for y position
    let mouseYEndPoint=window.innerHeight;
    let currentYPosition=0;
    let fracYvalue=0;

    let mouseXRange=mouseXEndPoint-mouseXStartPoint;

    const mouseMove=(event)=>{
        //console.log(event);
        currentXPosition=event.clientX-mouseXStartPoint;
        fracXvalue=currentXPosition/mouseXRange;
        console.log(fracXvalue);

        currentYPosition=event.clientY;
        fracYvalue=currentYPosition/mouseYEndPoint;
        console.log(fracYvalue);
    }
    window.addEventListener('mousemove',mouseMove);
}