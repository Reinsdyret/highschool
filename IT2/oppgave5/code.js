let tall1 = document.getElementById("tall1");
let tall2 = document.getElementById("tall2");
let btn = document.getElementById("btn");
let pOutput = document.getElementById("pOutput");

btn.onclick = function() {
    pOutput.innerHTML = tall1.value * tall2.value;
}