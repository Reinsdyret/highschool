let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.style.height = "500px";
canvas.style.width = "500px";

let colors = ["#6897bb","#ff0374", "#fff8b7", "#cd5c5c", "#00f8a1", "#e7c0f9", "#c1eaea", "#FFFFbF", "#0016Fb", "#cbfcb7","#008744", "#0057e7", "#d62d20", "#ffa700", "#4f5b66", "#a7adba"];

let heloInterval = setInterval(helo,100);
let x,y,h,w;
function helo(){
    ctx.fillStyle = colors[Math.floor(Math.random() * 16)];
    console.log(colors[Math.floor(Math.random() * 16)]);
    x = Math.floor(Math.random() * 200);
    y = Math.floor(Math.random() * 200);
    w = Math.floor(Math.random() * 100);
    h = Math.floor(Math.random() * 100);
    console.log("x " + x,"y " + y, "w " + w, "h "+ h);
    ctx.fillRect(x,y,w,h);
}


