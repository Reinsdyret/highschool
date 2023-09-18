let secretNum = Math.round(Math.random() * 10 +1);
let num = document.getElementById("num");
let btn = document.getElementById("btn");
let pOutput = document.getElementById("pOutput");

btn.onclick = function() {
    if(num.value == secretNum){
        pOutput.innerHTML = "Correct the secret number is " + num.value;
    }else if(num.value < secretNum){
        pOutput.innerHTML = "The secret number is higher than " + num.value;
    }else{
        pOutput.innerHTML = "The secret number is lower than " + num.value;
    }
}
