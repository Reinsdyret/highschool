let num = document.getElementById("num");
let btn = document.getElementById("btn");
let result = document.getElementById("result");

btn.onclick = function() {
    let even = num.value % 2 == 0;
    if(even) {
        result.innerHTML = "The number is even.";
    } else{
        result.innerHTML = "The number is odd.";
    }
}