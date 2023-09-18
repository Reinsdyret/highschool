let hor = document.getElementById("hor");
let ver = document.getElementById("ver");
let horOdd = document.getElementById("horOdd");
let i = 0;
while(i<=15){
    hor.innerHTML += i + " ";
    ver.innerHTML += i + "\n";
    if(i % 2 != 0){
        horOdd.innerHTML += "\n" + i;
    }
    i++;
}