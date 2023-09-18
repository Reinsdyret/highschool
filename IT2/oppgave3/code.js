let btnRed = document.getElementById("red");
let btnBlue = document.getElementById("blue");
let btnGreen = document.getElementById("green");
let text = document.getElementById("text");


btnRed.onclick = function() {
    text.style.color = "Red";
}

btnBlue.onclick = function() {
    text.style.color = "Blue";
}

btnGreen.onclick = function() {
    text.style.color = "Green";
}