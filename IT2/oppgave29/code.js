let pre = document.getElementById("pre");
let btnStart = document.getElementById("start");
let btnStop = document.getElementById("stop");
let interval;
let date;

btnStart.onclick = function(){
    pre.innerHTML = "";
    interval = setInterval(drawTime,100);
    date = new Date();
}

btnStop.onclick = function(){
    clearInterval(interval);
}

function drawTime(){
    let milliSekunder = new Date - date;
    let milli = milliSekunder % 1000;
    let sekunder = parseInt(milliSekunder / 1000);
    
    
    pre.innerHTML =sekunder+ ":" + milli;
}