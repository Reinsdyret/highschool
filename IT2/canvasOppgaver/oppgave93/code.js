let slide = document.getElementById("slider");
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");


canvas.style.height = "220px";
canvas.style.width = "220px";
canvas.style.border = "1px solid black";

slide.oninput = function(){
    ctx.fillStyle = "rgb(255,255,255,0.75)";
    ctx.fillRect(0,0,110,110);
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(55,55,slide.value,0,2 * Math.PI,false);
    ctx.stroke();
}