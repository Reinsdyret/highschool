let canvas = document.getElementById("canv");
let ctx = canvas.getContext("2d");

ctx.arc(0,0,900,0.5*Math.PI,0,true);

ctx.arc(300,0,600,0,0.5*Math.PI,false);

ctx.arc(600,600,300,Math.PI,1.5*Math.PI,false);

ctx.arc(600,900,600,1.5*Math.PI,Math.PI,true);

ctx.stroke();