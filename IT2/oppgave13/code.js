let num = document.getElementById("num");

for(let i = 0; i <= 100; i++) {
    if(i % 7 == 0){
        num.innerHTML += "<br>" + i;
    }
}