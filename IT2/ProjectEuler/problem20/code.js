function factorial(n){
    if(n == 0n){
        return BigInt(1);
    }else{
        return BigInt(n) * BigInt(factorial(n-1));
    }
}

function sumOfDigits(bigInt){
    let str = String(bigInt);
    let arr = str.split("");
    let sum = 0;
    for(let i = 0; i<arr.length-1; i++){
        sum += parseInt(arr[i]);
    }
    return sum;
}