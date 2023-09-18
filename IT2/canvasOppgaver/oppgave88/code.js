
let canvas = document.getElementById("ctx");
let ctx = canvas.getContext("2d");

for(let i = 10; i<=100; i+=10){
    for(let j = 10; j<=i; j+=10){
        ctx.fillRect(j,i,10,10)
    }
}
