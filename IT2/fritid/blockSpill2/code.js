class World{
    height;
    width;
    population;
    player;
    enemyBlocks = [];

    constructor(height,width,population){
        this.height = height;
        this.width = width;
        this.population = population;
    }

    init(ctx){
        for(let i = 0; i<this.population; i++){
            this.enemyBlocks.push(genBlock(true))
        }
    }

    genBlock(enemy){
        let sideLength = this.width / this.population / 2;
        let a = Math.floor(Math.random() * 2 + 1);
        switch(a == 1){
            case true:
                let x = Math.floor(Math.random() * this.width + 1);
                let b = Math.floor(Math.random() * 2 + 1);
                if(b == 0){
                    let y = Math.floor(Math.random() * sideLength + 1);
                }
                break;
            
            case false:
                return Math.floor(Math.)
        }
    }
}

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

