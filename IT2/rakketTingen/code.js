let canvas  = document.getElementById("canv");
let ctx = canvas.getContext("2d");
let body = document.getElementById("body");

let width = canvas.width;
let height = canvas.height

const STARS = 2000;
let stars = [];

for(let s = 0; s<STARS; s++){
    let star = {
        x: Math.floor(Math.random() * width),
        y: Math.floor(Math.random() * height),
        v: Math.floor(Math.random() * 5 + 1)
    };
    stars.push(star);
    console.log(star.w);
}

function animationLoop(){
    for(let s = 0; s<stars.length; s++){
        stars[s].x -= stars[s].v;
        if(stars[s].x <0){
            stars[s].x = width-1;
            stars[s].y = Math.floor(Math.random() * height);
        }
    }

    ctx.fillStyle = "black";
    ctx.fillRect(0,0,width,height);
    ctx.fillStyle = "white";

    for(let i = 0; i<stars.length; i++){
        ctx.fillRect(stars[i].x,stars[i].y,stars[i].v / 2,stars[i].v / 2);
    }
    requestAnimationFrame(animationLoop);
}
animationLoop();