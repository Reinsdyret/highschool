let colors = new Array(16);

for(let i = 0; i<16; i++){
    colors[i] = new Array(16);
    for(let j = 0; j<16; j++){
        colors[i][j] = new Array(16);
    }
}

for(let i = 0; i<16; i++){
    for(let j = 0; j<16; j++){
        for(let n = 0; n<16; n++){
            colors[i][j][n] = "rgb(" + i*17 + "," + j * 17 + "," + n*17 + ")";
        }
    }
}

console.log(colors[15][3][9]);