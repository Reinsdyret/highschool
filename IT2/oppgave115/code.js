class Pair{
    x;
    y;
    constructor(x,y){
        this.x = x;
        this.y = y
    }

    toString(pre){
        pre.innerHTML += "{" + this.x + "," + this.y + "}\n";
    }
}

class Point extends Pair{
    constructor(x,y){
        super(x,y);
    }

    toString(pre){
        pre.innerHTML += "(" + this.x + "," + this.y + ")\n";
    }
}

class Vector extends Pair{
    constructor(x,y){
        super(x,y);
    }

    toString(pre){
        pre.innerHTML += "[" + this.x + "," + this.y + "]\n";
    }
}

let pre = document.getElementById("pre");

let numbers = [
    new Pair(1,5),
    new Vector(4,2),
    new Vector(9,1),
    new Point(24,67),
    new Pair(2,4),
    new Pair(1,4),
    new Point(2.5,7),
    new Vector(3,5),
    new Point(9,9)
];

for(let i = 0; i<numbers.length; i++){
    numbers[i].toString(pre);
}