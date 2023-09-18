let ball = document.getElementById("ball");
let figure = document.getElementById("figure")
let y = 0;
let dy = 0.5;


function moveBall(){

    y += dy;

    ball.style.top = y + "px";
    if(y == figure.offsetHeight - ball.offsetHeight){
        clearInterval(a);
    }
}
let a = setInterval(moveBall,1);