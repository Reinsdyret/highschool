let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");


let btn = document.getElementById("submit");


btn.onclick = function(){
    let dice = document.getElementById("rolls").value;
    let sides = document.getElementById("sides").value;
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0,0,320,200);
    makeDiag(rollDice(dice,sides),dice,sides);
}

function rollDice(d,s){
    //Make list of sides to keep count
    let rolls = [];
    for(let i = 0; i < s; i++){
        rolls.push(0);
    }

    //Roll dices
    for(let i = 0; i<=d;i++){
        rolls[Math.floor(Math.random() * s)]+=1;
    }
    return rolls;
}

function makeDiag(l,d,s){
    ctx.fillStyle = "red";
    let squareWidth = 320 / s;
    
    let prev = 0;
    for(let i = 0; i<=l.length; i++){
        if(l[i] > prev){
            prev = l[i];
        }
    }
    console.log(prev);
    let oneRollInPx = 200/prev;
    ctx.beginPath();
    for(let i = 1; i<=s; i++){
        ctx.rect((i-1) * squareWidth,200,squareWidth,-1*(l[i-1]) * oneRollInPx);
        ctx.fillRect((i-1) * squareWidth,200,squareWidth-1,(-1*(l[i-1]) * oneRollInPx) - 1);
    }
    ctx.stroke();
}