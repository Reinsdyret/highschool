let num = document.getElementById("num");
let select = document.getElementById("select");
let btn = document.getElementById("btn");
let pre = document.getElementById("pre");

btn.onclick = function() {
    if(select.value == 'cmT'){
        pre.innerHTML = (num.value / 2.54).toFixed(2);
    }else if(select.value == 'tCm'){
        pre.innerHTML = (num.value * 2.54);
    }else if(select.value == 'kmM'){
        pre.innerHTML =(num.value / 1609).toFixed(2);
    }else if(select.value == 'mKm'){
        pre.innerHTML = (num.value  * 1609);
    }else if(select.value == 'krE'){
        pre.innerHTML = (num.value / 10)
    }else if(select.value == 'eKr'){
        pre.innerHTML = (num.value * 10)
    }
};