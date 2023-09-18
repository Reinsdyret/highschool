let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let ball = new Vector(canvas.width/2, canvas.height/2);
let mouseCircle = new Vector(canvas.width/2, canvas.height/2);

canvas.onclick = function(e){
    mouseCircle.x = e.clientX;
    mouseCircle.y = e.clientY;
}

function animationLoop(ball,mouseCircle){
    let path = mouseCircle.clone().subtract(ball);
    path.normalize();


}
