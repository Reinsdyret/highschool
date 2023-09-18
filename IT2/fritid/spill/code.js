let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let preScore = document.getElementById("preScore");

let world = {
    width : canvas.width,
    height : canvas.height,
    enemyBlocks : [],
<<<<<<< HEAD
    player: new Block(this.width/2,this.height/2,0,0,false,10),
    enemyPopulation : 25,
=======
    player: new Block(this.width/2,this.height/2,0,0,false),
    enemyPopulation : 50,
>>>>>>> 50eaf004cf8ac803695244bb48c03a08073c2e8d
    populate(){
        for(let i = 0; i<this.enemyPopulation; i++){
            this.enemyBlocks.push(new Block(-100,-100,0,0,true,20));
        }
    },

    collisionCheck(i){
        //Collision on left side of player
        if((this.enemyBlocks[i].x + this.enemyBlocks[i].sideLength >= world.player.x)
        &&
        (this.enemyBlocks[i].x <= this.player.x + this.player.sideLength)
        &&
        (this.enemyBlocks[i].y  +this.enemyBlocks[i].sideLength >= this.player.y)
        &&
        (this.enemyBlocks[i].y <= this.player.y + this.player.sideLength)){
            this.reset();
        }
    },

    reset(){
        alert("You Died Noob!, Score: " + this.score);
        this.enemyBlocks = [];
        this.populate();
        this.score = 0;
        startTime = Date.now();
    }
}
world.player = new Block(world.width/2,world.height/2,2,2,false);
world.populate();

document.addEventListener('keydown',movePlayer);

let startTime = Date.now();


setInterval(loop,500);
function loop(){
    ctx.clearRect(0,0,world.width,world.height);
    for(let i = 0; i<world.enemyPopulation; i++){
        world.enemyBlocks[i].update();
        if(world.enemyBlocks[i].x + world.enemyBlocks[i].sideLength >= world.width || world.enemyBlocks[i].x <= 0 || world.enemyBlocks[i].y + world.enemyBlocks[i].sideLength >= world.height || world.enemyBlocks[i].y < 0){
            world.enemyBlocks[i].respawn(world.width,world.height);
        }
    }
    for(let i = 0; i<world.enemyPopulation; i++){
        world.enemyBlocks[i].draw(ctx);
    }

    for(let i = 0; i<world.enemyPopulation; i++){
        world.collisionCheck(i)
    }
    world.player.draw(ctx);
    world.score = Date.now() - startTime;
    preScore.innerHTML = world.score;
}


function movePlayer(e){
    if(e.key == "ArrowDown" && world.player.y < world.height){
        world.player.y += world.player.ySpeed;
    }if(e.key == "ArrowUp" && world.player.y > 0){
        world.player.y -= world.player.ySpeed;
    }if(e.key == "ArrowLeft" && world.player.x > 0){
        world.player.x -= world.player.xSpeed;
    }if(e.key == "ArrowRight" && world.player.x < world.width){
        world.player.x += world.player.xSpeed;
    }
}

