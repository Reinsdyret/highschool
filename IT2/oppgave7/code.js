let el = document.getElementById("el");
let btn = document.getElementById("btn");
let lastEl = document.getElementById("lastEl");
let fullList = document.getElementById("fullList");
let list = [];

btn.onclick = function() {
    list.push(el.value);
    lastEl.innerHTML = el.value;
    fullList.innerHTML += el.value + "<br>";
}