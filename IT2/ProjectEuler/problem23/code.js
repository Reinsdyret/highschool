let sum = 0;
let memoValues = [];

for(let i = 1; i<=28123; i++){
    console.log(i);
    if(sumNotAbundant(i)){
        sum += i;
    }
}

console.log("Sum: " + sum);


function sumNotAbundant(num){
    let sumOne, sumTwo, n;
    for(let i = 1; i<= num / 2; i++){
        n = num - i;
        sumOne = 0;
        sumTwo = 0;
        if(!memoValues[i]){
            for(let j = 1; j<= i/2; j++){
                if(i % j == 0){
                    sumOne += j;
                }
                memoValues[i] = sumOne;
            }
        }else{
            sumOne = memoValues[i];
        }
        if(!memoValues[n]){
            for(let j = 1; j<= n/2; j++){
                if(n % j == 0){
                    sumTwo += j;
                }
                memoValues[n] = sumTwo;
            }
        }else{
            sumTwo = memoValues[n];
        }
        if(sumOne > i && sumTwo > n && n + i == num){
            return false;
        }
    }
    return true;
}