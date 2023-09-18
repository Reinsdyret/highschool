let btnKatt = document.getElementById("btn-katt");
let btnHund = document.getElementById("btn-hund");
let btnTøm = document.getElementById("btn-tøm");
let pOutput = document.getElementById("pOutput");

btnHund.onclick = function() {
    pOutput.innerHTML += "hund<br>";
}

btnKatt.onclick = function() {
    pOutput.innerHTML += "katt<br>";
}

btnTøm.onclick = function() {
    pOutput.innerHTML = "";
}