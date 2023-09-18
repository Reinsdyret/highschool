let checkWave = document.getElementById("wave");
let checkShake = document.getElementById("shake");

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let interval;
let intervalRunning = false;
let up = false;
let left = false;

let stickMan = {
    headX : canvas.offsetWidth/6 * 3,
    headY : canvas.offsetHeight/7 * 1,
    torsoX : canvas.offsetWidth/6 * 3,
    torsoY : canvas.offsetHeight/7 * 2,
    leftArmX : canvas.offsetWidth/6 * 1,
    leftArmY : canvas.offsetHeight / 7 * 2,
    rightArmX : canvas.offsetWidth / 6 * 5,
    rightArmY : canvas.offsetHeight / 7 * 2,
    assX : canvas.offsetWidth / 6 * 3,
    assY : canvas.offsetHeight / 7 * 4,
    leftFootX : canvas.offsetWidth / 6 * 2,
    leftFootY : canvas.offsetHeight / 7 * 6,
    rightFootX : canvas.offsetWidth / 6 * 4,
    rightFootY : canvas.offsetHeight / 7 * 6,
}

drawStickPerson();
//setInterval(wave,100);
//setInterval(shake,100);

function run(){
    if(checkWave.checked == true){
        if(intervalRunning == true){
            clearInterval(interval);
            intervalRunning = false;
        }
        interval = setInterval(wave,100);
        intervalRunning = true;
    }else if(checkShake.checked == true){
        if(intervalRunning == true){
            clearInterval(interval);
            intervalRunning = false;
        }
        interval = setInterval(shake,100);
        intervalRunning = true;
    }
}

function wave(){
    if(up == false){
        stickMan.leftArmY = canvas.offsetHeight / 7 * 1;
        stickMan.rightArmY = canvas.offsetHeight / 7 * 1;
        up = true;
    }else{
        stickMan.leftArmY = canvas.offsetHeight / 7 * 2;
        stickMan.rightArmY = canvas.offsetHeight / 7 * 2;
        up = false;
    }

    drawStickPerson();
}

function shake(){
    if(left == true){
        stickMan.assX = canvas.offsetWidth / 6 * 3.5;
        left = false;
    }else{
        stickMan.assX = canvas.offsetWidth / 6 * 2.5;
        left = true;
    }

    drawStickPerson();
}


function drawStickPerson(){
    ctx.clearRect(0,0,canvas.offsetWidth,canvas.offsetHeight);
    ctx.fillStyle = 'blue';
    ctx.beginPath();
    //Draw points
    ctx.arc(stickMan.headX,stickMan.headY,10,0,2* Math.PI);
    ctx.fill();

    ctx.moveTo(stickMan.torsoX,stickMan.torsoY);
    ctx.arc(stickMan.torsoX,stickMan.torsoY,10,0,2 * Math.PI);
    ctx.fill();

    ctx.moveTo(stickMan.leftArmX,stickMan.leftArmY);
    ctx.arc(stickMan.leftArmX,stickMan.leftArmY,10,0,2*Math.PI);
    ctx.fill();

    ctx.moveTo(stickMan.rigthArmX,stickMan.rigthArmY);
    ctx.arc(stickMan.rigthArmX,stickMan.rigthArmY,10,0,2* Math.PI);
    ctx.fill();

    ctx.moveTo(stickMan.assX,stickMan.assY);
    ctx.arc(stickMan.assX,stickMan.assY,10,0,2 * Math.PI);
    ctx.fill();

    ctx.moveTo(stickMan.leftFootX,stickMan.leftFootY);
    ctx.arc(stickMan.leftFootX,stickMan.leftFootY,10,0,2*Math.PI);
    ctx.fill();

    ctx.moveTo(stickMan.rightFootX,stickMan.rightFootY);
    ctx.arc(stickMan.rightFootX,stickMan.rightFootY,10,0,2*Math.PI);
    ctx.fill();

    //Draw Lines
    ctx.beginPath();
    ctx.moveTo(stickMan.headX,stickMan.headY);
    ctx.lineTo(stickMan.torsoX,stickMan.torsoY);
    ctx.lineTo(stickMan.leftArmX,stickMan.leftArmY);
    ctx.lineTo(stickMan.rigthArmX,stickMan.rigthArmY);
    ctx.lineTo(stickMan.torsoX,stickMan.torsoY);
    ctx.lineTo(stickMan.assX,stickMan.assY);
    ctx.lineTo(stickMan.leftFootX,stickMan.leftFootY);
    ctx.lineTo(stickMan.assX,stickMan.assY);
    ctx.lineTo(stickMan.rightFootX,stickMan.rightFootY);
    ctx.stroke();
}
