let temp;
let short = "";
let d;
let long = "";

for(let i = 1; i<1000; i++){
    temp = returnDecimal(i);
    console.log(temp);
    short = temp[0];
    if(short.length > long.length){
        long = short;
        d = temp[1];
    }
}

console.log(long,d);

function returnDecimal(d){
    let temp = 1/d;
    let str = String(temp.toFixed(100));
    let arr = [];
    let count = 0;
    let max = 0;
    
    for(let i = 0; i<str.length && i<100; i++){
        arr.push(str[i]);
    }
    if(arr.length > 30){
        for(let i = 10; i<arr.length; i++){
            for(let j = 0; j<i; j++){
                if(arr[i] == arr[j]){
                    count++;
                }
                max++;
            }
        }
        if(count >100){
            return [1,d];
        }
    }else{
        return [1,d];
    }

    return [count,d];
}