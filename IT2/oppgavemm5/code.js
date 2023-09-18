let boat = document.getElementById("boat");
let map = document.getElementById("map");

boatObj = {
    x: 50,
    y:200
};


function moveBoat(){
    for(let i = 0; i<100; i++){
        boat.style.top = boatObj.x + 2 + "px";
        boat.style.top = boatObj.x + 1 + "px";
        boatObj.x += 2;
        boatObj.y ++;
    }
}