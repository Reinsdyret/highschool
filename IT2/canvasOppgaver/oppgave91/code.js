let canvas = document.getElementById("canv");
let ctx = canvas.getContext("2d");

let lines = 10;
let spacing = 150 / lines;

drawLines(lines,spacing);

function drawLines(a,s){
    ctx.moveTo(0,0);
    for(let i = 0; i< 150; i+=s){
        ctx.lineTo(150,i);
        ctx.stroke();
        ctx.moveTo(0,0);
    }
}