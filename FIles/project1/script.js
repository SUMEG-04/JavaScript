ludogame=()=>{
    const plr1=Math.floor(Math.random()*6)+1;
    console.log(plr1);
    const plyr1dice=`img/dice${plr1}.jpg`;
    document.getElementById('check1').setAttribute('src',`${plyr1dice}`);
    const plr2=Math.floor(Math.random()*6)+1;
    const plyr2dice=`img/dice${plr2}.jpg`;
    document.getElementById('check2').setAttribute('src',plyr2dice);
}