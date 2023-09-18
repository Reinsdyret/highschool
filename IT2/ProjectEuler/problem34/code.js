let max = 7*factorial(9);
let sum = 0;
let digits,str;

for(let i = 3; i<max; i++){
    str = String(i);
    digits = [];
    for(let i = 0; i<str.length; i++){
        digits.push(str[i]);
    }
    if(factorialDigitSum(digits)){
        sum += i;
    }
    console.log(i);
}

console.log(sum);



function factorial(n){
    if(n == 0){
        return 1;
    }else{
        return n * factorial(n-1);
    }
}


function factorialDigitSum(arr){
    let sum = 0;
    let string = "";
    for(let i = 0; i<arr.length; i++){
        string += arr[i];
        sum += factorial(parseInt(arr[i]));
    }
    let num = parseInt(string);
    console.log(num,sum);
    if(sum == num){
        return true;
    }else{
        return false;
    }

}