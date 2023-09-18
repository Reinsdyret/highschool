let pre = document.getElementById("pre");
let pre = document.getElementById("pre");



function everyFive(){
    let date = new Date;
    console.log(date.getSeconds());
    if(date.getSeconds() % 5 == 0){
        pre.innerHTML += "*";
    }
}
var interVal = setInterval(everyFive,1000);
