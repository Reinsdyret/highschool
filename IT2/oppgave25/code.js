let pre = document.getElementById("pre");

for(let i = 1; i<= 9; i++){
    for(let j = 0; j<= 9; j++){
        for(let n = 0; n<= 9; n++){
            let sum = i + j + n;
            let produkt = i*j*n;
            if(sum == produkt){
                pre.innerHTML += i + "\n" + j + "\n" + n + "\n";
            }
            
        }
    }
}   