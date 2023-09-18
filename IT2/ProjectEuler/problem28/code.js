console.log(spiral(1001));

function spiral(side){
    let sum = 1;
    let current = 1;
    let k = 2;
    for(let i = 0; i<(side-1) / 2; i++){
        for(let j = 0; j<4; j++){
            current += k;
            sum += current;
            
        }
        k += 2;
    }
    return sum;
}