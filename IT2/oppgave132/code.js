let inp = document.getElementById("input");
let pre = document.getElementById("pre");
inp.addEventListener('input',function(e){
    let newString = '';
    for(let i = inp.value.length-1; i>=0; i--){
        newString += inp.value[i];
    }
    pre.innerHTML = newString;
});