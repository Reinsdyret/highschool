let currentA, currentB;
let currentLength = 0;

let primes = makePrimes(999*1000);


for(let a = -999; a<1000; a++){
    for(let b = -1000; b<=1000; b++){
        if(findPrimes(a,b) > currentLength){
            currentLength = findPrimes(a,b);
            currentA = a;
            currentB = b;
        }
    }
}

console.log(currentA * currentB);


function findPrimes(a,b){
    let n = 0;
    while(primes[(n**2) + a * n + b]){
        n++;
    }
    return n;
}


function makePrimes(max)
/**
 * Sieve of Eratosthenes algorythm for checking
 */
{
    
    let A = new Array(max+1);
    for(let i = 2; i<max; i++){A[i] = true;}

    for(let i = 2; i<Math.sqrt(max+1); i++){
        if(A[i]){
            for(let j = Math.pow(i,2); j<max+1; j+= i){
                A[j] = false;
            }
        }
    }
    
    return A;
}