let num = document.getElementById("num");
let btn = document.getElementById("btn");
let sum = document.getElementById("sum");
let sumTot = 0;

btn.onclick = function() {
    let number = parseInt(num.value);
    for(let i = 0; i<= number; i++){
        sumTot += i;
    }
    let summen = sumTot;
    sumTot = 0;
    sum.innerHTML = summen;
};