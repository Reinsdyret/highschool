distinctPowers();

function distinctPowers(){
    let numbers = [];
    //legger i liste
    for(let i = 2; i<=100; i++){
        for(let j = 2; j<=100; j++){
            //if(!numbers.includes(BigInt(Math.pow(i,j)))){
                numbers.push(BigInt(Math.pow(i,j)));
                console.log(BigInt(Math.pow(i,j)))
            //}
        }
    }
    
    return numbers;
}