let pre = document.getElementById("pre");
/*let last = 0, mean = 1;

function everyFourth(){ pre.innerHTML = "number" + "\t" + "sum" + "\t" + "mean" + "\n";
    /*time += 0.25
    pre.innerHTML = time;*//*
    for(let i = 1; i<=10; i++){
        pre.innerHTML += i + "\t";
        pre.innerHTML += i+last + "\t" + mean + "\n";
        mean+=0.5;
        last += i;
    }

}

setInterval(everyFourth());*/
let a,b
function fibonacci(a,b,end){
    a = b+1;
    b = a+b;
    return fibonacci(a,b,end);
}

function fibonacciForPat(end){
    if(end == 1){
        return 1;
    }else if(end == 0){
        return 0;
    }else{
        return (fibonacciForPat(end - 1) + fibonacciForPat(end-2));
    }
}
console.log(fibonacci(0,1,46));