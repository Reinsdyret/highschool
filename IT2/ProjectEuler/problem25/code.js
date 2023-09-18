console.log(fibonacci());

function fibonacci(){
    let count = 2;
    let a = BigInt(1);
    let b = BigInt(1);
    let c;
    let found = false;
    while(!found){
        c = a + b;
        a = b;
        b = c;
        count++;
        if(String(b).length == 1000){
            return count;
        }
        console.log(b);
    }
}