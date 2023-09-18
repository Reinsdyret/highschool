let inputDes = document.getElementById("input");
let inputHeks = document.getElementById("preHeks");
let inputBin = document.getElementById("preBin");

inputDes.oninput = function(){
    let des = parseInt(input.value);
    let heks = des.toString(16);
    let bin = des.toString(2);

    inputHeks.value = heks;
    inputBin.value = bin;
}

inputHeks.oninput = function(){
    let heks = inputHeks.value;
    let des = parseInt(heks,16);
    let bin = des.toString(2);
 
    inputDes.value = des;
    inputBin.value = bin;
}

inputBin.oninput = function(){
    let bin = inputBin.value;
    let des = parseInt(bin,2);
    let heks = des.toString(des,16);
    
 
    inputDes.value = des;
    inputHeks.value = heks;
}