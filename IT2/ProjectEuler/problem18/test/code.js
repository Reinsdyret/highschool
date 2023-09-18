/*let arraay = new Array(10);
for(let i = 0; i<arraay.length; i++){
    arraay[i] = new Array(10);
}
for(let i = 0; i<arraay.length; i++){
    for(let j = 0; j<arraay[i].length; j++){
        arraay[i][j] = 1;
    }
}


let arr = nullFillTriangle(arraay,true);

printArray(arr);


function nullFillTriangle(arr,flagg){
    let len = arr.length;
    for(let i = 0; i<len; i++){
        if(arr[i].length != len){
            console.log(len,arr[i].length,i);
            return [];
        }
    }

    if(flagg){
        for(let i = 0; i<len - 1; i++){
            for(let j = i +1; j<len; j++){
                arr[i][j] = 0;
            }
        }
    }else{
        for(let i = len - 1; i>0; i--){
            for(let j = i-1; j>=0; j--){
                arr[i][j] = 0;
            }
        }
    }
    return arr;
}
*/
let array = new Array(6);
for(let i = 0; i<array.length; i++){
    array[i] = new Array(6);
}

for(let i = 0; i<array.length; i++){
    for(let j = 0; j<array[i].length; j++){
        array[i][j] = Math.floor(Math.random() * 10 - 4);
    }
}

console.log(positiveDiag(array));
printArray(array);

function positiveDiag(arr){
    let count = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i][i] > 0){count++;}
    }
    return count;
}

function printArray(arr){
    let pre = document.getElementById("pre");

    for(let i = 0; i<arr.length; i++){
            for(let j = 0; j<arr[i].length; j++){
                pre.innerHTML += arr[i][j] + "\t";
            }
        pre.innerHTML += "\n";
    }
}