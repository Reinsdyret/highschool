let canvas = document.getElementById("canv");
let ctx = canvas.getContext("2d");


for(let i = 1; i<= 16; i++){
    for(let j = 1; j<=16; j++){
        ctx.fillStyle = "rgb(" + j*16 + "," + i*16 + "," + "0" + ")";
        ctx.fillRect(j * 10,i * 10, 10,10);
    }
}