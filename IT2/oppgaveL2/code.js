let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let theta = (Math.PI/2);

let seed = "";

for(let i = 0; i<1000; i++){
    for(let j = 0; j<i; j++){
        seed += "F";
    }
    seed += "+";
}

let vectorMove = new Vector(2,0);
let vectorPos = new Vector(canvas.width/2,canvas.height/2);

let commands = [
    ["F","G","+","-"],
    [line,move,vectorMove,vectorMove]
];

ctx.beginPath();
ctx.moveTo(vectorPos.x,vectorPos.y);
for(let i = 0; i<seed.length; i++){
    for(let j = 0; j<commands[0].length; j++){
        if(seed[i] == commands[0][j]){
            if(j == 2){
                commands[1][j].rotate(theta);
            }else if(j == 3){
                commands[1][j].rotate(-1*theta);
            }else{
                commands[1][j]();
            }
        }
    }
}
ctx.stroke();
function line(){
    vectorPos.add(vectorMove);
    ctx.lineTo(vectorPos.x,vectorPos.y);
}

function move(){
    vectorPos.add(vectorMove);
    ctx.moveTo(vectorPos.x,vectorPos.y);
}