let star = document.getElementById("star");
let ting = "*"

for(let i = 10; i > -1; i--){
    for(let j = 0; j <= i; j++){
        star.innerHTML += ting;
    }
    star.innerHTML += "\n";
}