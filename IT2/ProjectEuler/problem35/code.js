let primes = makePrimes(1000000);
let amount = 0;

for(let n = 0; n<=1000000; n++){
    if(testForCircuality(n)){amount++;}
}

console.log(amount);
function testForCircuality(n){
    let str = String(n);
    let first;
    let counter = 0;
    
    while(primes[parseInt(str)] && counter < str.length){
        first = str[0];
        str = str.substring(1);
        str += first;
        counter++;
    }

    if(counter == str.length){return true;}else{return false;}
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