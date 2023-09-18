let pre = document.getElementById("pre");
let btn = document.getElementById("btn");
let inp = document.getElementById("num");
let tallSum = 0;
let tallProd = 1;
btn.onclick = function() {
    for(let i = 1; i<= inp.value; i++){
        tallSum += (2*i + 1);
        tallProd *= (2*i + 1);
    }
    pre.innerHTML = "sum: " + tallSum + "\n" + "prod: " + tallProd;
}