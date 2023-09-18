let sum = 0

for(let i = 4; i<10000; i++){
    if(checkAmicable(i)){
        sum += i;
    }
}

console.log(sum);


function checkAmicable(num){
    let divisorsFirst = [], divisorsSecond = [];

    for(let i = 1; i<num; i++){
        if(num % i == 0){
            divisorsFirst.push(i);
        }
    }

    let sumDivisors = 0;
    for(let i = 0; i<divisorsFirst.length; i++){
        sumDivisors += divisorsFirst[i];
    }

    for(let i = 1; i<sumDivisors; i++){
        if(sumDivisors % i == 0){
            divisorsSecond.push(i);
        }
    }

    let sumDivisorsSecond = 0;
    for(let i = 0; i<divisorsSecond.length; i++){
        sumDivisorsSecond += divisorsSecond[i];
    }
    if(sumDivisorsSecond == num && sumDivisors != num){
        console.log(divisorsFirst,divisorsSecond);
        console.log(num);
        return true;
    }else{
        return false;
    }
}