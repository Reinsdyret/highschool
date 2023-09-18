let btnYes = document.getElementById("btn-yes");
let btnNo = document.getElementById("btn-no");
let pOutput = document.getElementById("pOutput");

btnYes.onclick = function() {
    pOutput.innerHTML = "yes";
}
btnNo.onclick = function() {
    pOutput.innerHTML = "no";
}