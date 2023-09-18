let canvas = document.getElementById("canv");
let ctx = canvas.getContext("2d");
let width = canvas.width;
let height = canvas.height;

const STARS = 2000;
let stars = new Array();

for(let i = 0; i<STARS; i++){
    let star = {
        x: Math.floor(Math.random() * 10 + ((width / 2) -10)),
        y: Math.floor(Math.random() * 10 + ((height / 2) -10)),
        v: Math.floor(Math.random() * 5 + 1)
    };
    stars.push(star);
}



function animationLoop(){

    for(let i = 0; i<stars.length; i++){
        if(stars[i].x > width && stars[i].y > height){
            stars[i].x = Math.floor(Math.random() * 10 + ((width / 2) -10));
            stars[i].y = Math.floor(Math.random() * 10 + ((height / 2) -10));
        }
        if(stars[i].x > width / 2){
            stars[i].x += stars[i].v
        }else{
            stars[i].x -= stars[i].v
        }
        if(stars[i].y > height / 2){
            stars[i].y += stars[i].v
        }else{
            stars[i].y -= stars[i].v
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