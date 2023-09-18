let canvas = document.getElementById("canv");
let ctx = canvas.getContext("2d");

let throws = document.getElementById("num");
let btnSubmit = document.getElementById("submit");

let rolls = new Array(6);

let dice1,dice2;

let spacing = 300/6;

for(let i = 0; i< rolls.length; i++){
    rolls[i] = new Array(6);
}


btnSubmit.onclick = function(){
    //Clear all values
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0,0,300,300);
    for(let i = 0; i<6; i++){
        for(let j = 0; j<6; j++){
            rolls[i][j] = 0;
        }
    }

    //Roll dices
    for(let i = 0; i<throws.value;i++){
        dice1 = Math.floor(Math.random() * 6);
        dice2 = Math.floor(Math.random() * 6);
        rolls[dice1][dice2] += 1;
    }
    //Find highest value and draw outline of squares
    let highestValue = 0;
    for(let i = 0; i<6; i++){
        for(let j = 0; j<6; j++){
            if(rolls[i][j] > highestValue){
                highestValue = rolls[i][j];
            }
            ctx.rect(j*spacing,i*spacing,spacing,spacing);
        }
    }
    ctx.stroke();
    let redSpacing = 255/highestValue;
    
    //Color squares with red based on node value
    for(let i = 0; i<6;i++){
        for(let j = 0; j<6; j++){
            ctx.fillStyle = "rgb(" + rolls[i][j] * redSpacing + ",0,0)";
            ctx.fillRect(j*spacing, i*spacing, spacing-1,spacing-1);
        }
    }
}