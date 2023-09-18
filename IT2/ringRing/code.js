let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let numbers = new Array(3);
for(let i = 0; i<3; i++){
    numbers[i] = new Array();
}
for(let i = 8; i>0; i--){
    numbers[0].push(i);
}
let clicks = 0;

canvas.onclick = function(e){
    let col1,col2;
    clicks++;
    if(clicks == 1){
        col1 = getCol(e.clientX, e.clientY,clicks);
    }else{
        col2 = getCol(e.clientX, e.clientY,clicks);
    }
    if(clicks == 2){
        if(checkIfPossibleMove(col1,col2)){
            move(col1,col2);
        }
        draw(numbers);
    }
    
    if(clicks == 2){
        clicks = 0;
    }
}


function getCol(x,y,c){
    let temp1, temp2;
    if(c == 1){
        if(x < 200){
            temp1 = 0;
        }else if(x >=200 && x<400){
            temp1 = 1;
        }else{
            temp1 = 2;
        }
        return temp1;
    }else{
        if(x < 200){
            temp2 = 0;
        }else if(x >=200 && x<400){
            temp2 = 1;
        }else{
            temp2 = 2;
        }
        return temp2;
    }
}

function checkIfPossibleMove(col1,col2){
    if(numbers[col2].length == 0){
        return true;
    }
    let first = numbers[col1][numbers[col1].length -1];
    let second = numbers[col2][numbers[col2].length -1];

    if(first < second){
        return true;
    }else{
        return false;
    }
}

function move(col1,col2){
    numbers[col2].push(numbers[col1].pop());
}
draw(numbers);
function draw(blocks){
    ctx.fillRect(0,100,canvas.clientWidth,10);
    for(let i = 0; i<3; i++){
        ctx.fillRect(canvas.width/3 * i + 100,0,10,100);
    }
    for(let i = 0; i<3; i++){
        for(let j = 0; j<blocks[i].length; j++){
            let x = i * 100 + 100 - (blocks[i][j] * 7.5);
            let y = 100 - (j * 10);
            let width = blocks[i][j] * 15 + 10;
            let height = 10;
            ctx.fillRect(x,y,width,height);
        }
    }
}