let star = document.getElementById("text");

for(let i = 0; i<= 8; i++){
    for(let j = 0; j<= 8; j++){
        if(j % 2 == 0) {
            star.innerHTML += "*"
        } else{
            star.innerHTML += " "
        }
    }
    star.innerHTML += "\n";
    if(i % 2 == 0){
        star.innerHTML += " ";
    }
    
}


