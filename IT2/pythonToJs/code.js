let x1,x2,y1,y2;
let values = [];
let totalSum = 0;




function findNumbas(){
    for(let i = 0; i<= 10000; i++){
        x1 = Math.random() * 100;
        x2 = Math.random() * 100;
        y1 = Math.random() * 100;
        y2 = Math.random() * 100;
        let value = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2));
        values.push(value);
    }
}


function findSum(){
    for(let i in values){
        totalSum += values[i];
    }
    return totalSum / values.length;
}

findNumbas();
console.log(findSum());
