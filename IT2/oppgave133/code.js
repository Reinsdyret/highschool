let inp = document.getElementById("input");
let pre = document.getElementById("pre");
inp.addEventListener('input',function(e){
    let newString = '';
    for(let i = inp.value.length-2; i>=1; i--){
        newString += inp.value[i];
    }
    pre.innerHTML = inp.value[0] + newString + inp.value[inp.value.length-1];
})