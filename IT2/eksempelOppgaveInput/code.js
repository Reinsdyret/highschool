let inputValue = document.getElementById("inputValue");
let buttonOk = document.getElementById("buttonOk");
let pOutput = document.getElementById("pOutput");

buttonOk.onclick = function() {
    pOutput.innerHTML = parseFloat(inputValue.value) * 7;

}