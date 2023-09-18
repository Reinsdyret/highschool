let ballStyle = document.getElementById("ball").style;
let btnStart = document.getElementById("btnStart");
let btnStop = document.getElementById("btnStop");
let interval = setInterval(ball,10);
let i = 0;
let running = false;

function ball(){
    if(running){
        if(i == 500){
            clearInterval(interval);
        }else{
            i++;
            ballStyle.top = i + "px";
            ballStyle.left = i + "px";
            ballStyle.width = i + "px";
        }
    }
    
}

btnStart.onclick = function(){
    if(running){
        running = false;
    }else{
        running = true;
    }
    
}