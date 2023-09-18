let num = document.getElementById("num");
let btn = document.getElementById("btn");
let sum = document.getElementById("sum");


btn.onclick = function() {
    let sumTot = 1;
    let number = parseInt(num.value);
    for(let i = 1; i<= number; i++){
        sumTot *= i;
    }
    let summen = sumTot;
    sum.innerHTML = summen;
};
