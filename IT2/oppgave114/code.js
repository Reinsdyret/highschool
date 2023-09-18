let ctx = document.getElementById("canvasBalls").getContext("2d");
let BALLS = 100;
let balls = [];
for (let b=0; b<BALLS; b++) {
    let ball = new Ball(ctx);
    balls.push(ball);
}
  
function animationLoop() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    for (let b=0; b<BALLS; b++) {
        balls[b].update();
        balls[b].draw();
    }
    //  Lars sin kode
    
    for(let i = 0; i<balls.length / 2; i++){
        for(let j = balls.length -1; j>balls.length / 2; j--){
            balls[i].collision(balls[j]);
        }
    }
    requestAnimationFrame(animationLoop);
}
animationLoop();