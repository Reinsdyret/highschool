let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let seed = prompt("String:");

let replace = [
    ["A","B","C"],
    ["ABA","BBB","CBC"]
];

draw(ctx,seed,10);
function grow(sentence){
    let newString = "";

    for(let i = 0; i<sentence.length; i++){
        for(let j = 0; j<replace.length; j++){
            if(sentence[i] == replace[0][j]){
                newString += replace[1][j];
            }
        }
    }

    return newString;
}

function draw(ctx,seed,rows){
    let text = seed;
    let rowSize = canvas.height / rows;
    let colSize = canvas.width / text.length;
    for(let i = 0; i<rows; i++){
        for(let j = 0; j<text.length; j++){
            if(text[j] == "A"){
                ctx.fillRect(colSize * j, rowSize * i, colSize, rowSize);
            }
        }
        text = grow(text);
        colSize = canvas.width / text.length;
    }
}
