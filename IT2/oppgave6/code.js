let pOutput = document.getElementById("pOutput");
let buttonCalculate = document.getElementById("buttonCalculate");
let inputFahrenheit = document.getElementById("inputFahrenheit");

buttonCalculate.onclick = function () {

    let fahrenheit = inputFahrenheit.value;

    let celsius;

    celsius = (fahrenheit - 32) * (5/9);

    pOutput.innerHTML = celsius;

}