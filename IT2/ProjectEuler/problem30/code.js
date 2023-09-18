let summen = 0;

for(let i = 2; i<1000000; i++){
    if(ifPowerSum(i)){
        summen += i;
    }
}

console.log(summen);

function ifPowerSum(num){
    let str = String(num);
    let sum = 0;
    let integer;

    for(let i = 0; i<str.length; i++){
        integer = parseInt(str[i]);
        sum += Math.pow(integer,5);
    }

    if(sum == num){
        return true;
    }else{
        return false;
    }
}