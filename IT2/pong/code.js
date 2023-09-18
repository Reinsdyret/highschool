let gameCanvas = document.getElementById("gameCanvas");
let imgBall = document.getElementById("ball");
let imgLeftPaddle = document.getElementById("leftPaddle");
let imgRightPaddle = document.getElementById("rightPaddle");
let ballHitSound = document.getElementById("ballHit");
let scoreLeft = document.getElementById("scoreLeft");
let scoreRight = document.getElementById("scoreRight");
let scoreLeftNum = 0;
let scoreRightNum = 0;
scoreLeft.innerHTML = scoreLeftNum;
scoreRight.innerHTML = scoreRightNum;
ballHitSound.playBackRate = 6;

document.addEventListener('keydown',movePaddle);

let ball = {
    width: 10,
    height: 10,
    x: 150,
    y: 90,
    speed_x: 2,
    speed_y: 0.4
};

let leftPaddle = {
    x: 0,
    y: 75,
    width: 11,
    height: 58
};

let rightPaddle = {
    x: 310,
    y: 75,
    width: 11,
    height: 58
};


function game(){
    ball.update();
    leftPaddle.update();
    checkCollLeft();
    checkCollRight();
    checkCollTopBot();
    checkCollBackWall();
}

function checkCollLeft(){
    if((leftPaddle.x + leftPaddle.width >= ball.x)
    &&
    (leftPaddle.y <= ball.y)
    &&
    (leftPaddle.y + leftPaddle.height >= ball.y))
    {
        ball.speed_x *= -1;
        hitSound();
    }
}

function checkCollRight(){
    if((rightPaddle.x >= ball.x)
        &&
        (rightPaddle.x <= ball.x + ball.width)
        &&
        (rightPaddle.y + rightPaddle.height >= ball.y)
        &&
        (rightPaddle.y <= ball.y + ball.height)
        ){
        ball.speed_x *= -1;
        hitSound();
    }
}

function checkCollTopBot(){
    if(//Check for collision on the bottom
        (ball.y + ball.height >= 200)
        || //Check for collision on the top
        (ball.y <= 0)
        ){
            ball.speed_y *= -1;
    }
}

function checkCollBackWall(){
    //check for collision on back walls, and score points
    if(ball.x + ball.width >= 320){
        ball.speed_x *= -1;
        scoreLeftNum += 1;
        scoreLeft.innerHTML = scoreLeftNum; 

    }
}

function hitSound(){
    ballHitSound.play();
}
ball.update = function(){
    imgBall.style.left = this.x + "px";
    this.x += this.speed_x;
    imgBall.style.top = this.y + "px";
    this.y += this.speed_y;
}

rightPaddle.update = function(){
    this.y += 1;
    imgRightPaddle.style.top = this.y + "px"
}

leftPaddle.update = function(){
    let differanse = this.y + (this.height / 2) - ball.y;
    this.y -= differanse;
    imgLeftPaddle.style.top = this.y + "px";
}

function movePaddle(e){
    if(e.keyCode == 38 && rightPaddle.y >= 0){
        rightPaddle.y -= 2;
        imgRightPaddle.style.top = rightPaddle.y + "px";  
    }if(e.keyCode == 40 && rightPaddle.y + rightPaddle.height <= 200){
        rightPaddle.y += 2;
        imgRightPaddle.style.top = rightPaddle.y + "px";
        }
    }

let interval = setInterval(game,10);