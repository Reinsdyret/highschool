class Baby{
    x;
    y;
    color;
    colors = ["red","white","blue","green","pink","yellow"];
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.color = this.colors[Math.round(Math.random() * 5)];
    }

    placeBaby(){
        this.color = this.colors[Math.round(Math.random() * 5)];
        this.x = Math.floor(Math.random() * worldSnake.width);
        this.y = Math.floor(Math.random() * worldSnake.height);
    }
}


class Snake{
    x;
    y;
    color;
    direction;

    constructor(x,y,color){
        this.x = x;
        this.y = y;
        this.color = color;
        this.direction = {
            x: 1,
            y: 0
        };
    }
}

class World{
    height;
    width;
    cellHeight;
    cellWidth;

    constructor(width,height){
        this.height = height;
        this.width = width;
        this.cellWidth = canvas.width / this.width;
        this.cellHeight = canvas.height / this.height
    }

    loop(){
        // Do calc

        snake[0].x = (snake[0].x + snake[0].direction.x + this.width) % this.width;
        snake[0].y = (snake[0].y + snake[0].direction.y + this.height) % this.height;

        // Update canvas
        ctx.fillStyle = "black";
        ctx.fillRect(0,0,canvas.width, canvas.height);

        ctx.fillStyle = baby.color;
        ctx.fillRect(baby.x * this.cellWidth, baby.y * this.cellHeight,this.cellWidth,this.cellHeight);

        for(let i = 0; i<snake.length; i++){
            ctx.fillStyle = snake[i].color;
            ctx.fillRect(
                snake[i].x * this.cellWidth,
                snake[i].y * this.cellHeight,
                this.cellWidth,
                this.cellHeight
            );
        }

        //Check if snake is eating baby
        if(snake[0].x == baby.x && snake[snake.length -1].y == baby.y){
            switch(baby.color){
                case("green"):
                    clearInterval(a);
                    a = setInterval(runLoop,25);
                case("red"):
                    clearInterval(a);
                    a = setInterval(runLoop,100);
                    
            }
            
            snake.push(new Snake(-1,-1,randColor()));
            
            baby.placeBaby();
        }

        for(let p = snake.length - 1; p>0; p--){
            snake[p].x = snake[p-1].x;
            snake[p].y = snake[p-1].y;
        }
    }

    reset(baby){
        //Reset
        snake = [];
        snake.push(
            new Snake(Math.ceil(this.width / 2),Math.ceil(this.height/2),"red")
        );
        baby.placeBaby();
    }
}

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let snake = [];
let baby = new Baby(10,10);

let worldSnake = new World(32,18);

worldSnake.reset(baby);
let a = setInterval(runLoop,100);

function runLoop(){
    worldSnake.loop();
}

document.onkeydown = function(e){
    switch(e.key){
        case("ArrowLeft"):
            snake[0].direction.x = -1;
            snake[0].direction.y = 0;
            break;
        case("ArrowUp"):
            snake[0].direction.x = 0;
            snake[0].direction.y = -1;
            break;
        case("ArrowRight"):
            snake[0].direction.x = 1;
            snake[0].direction.y = 0;
            break;
        case("ArrowDown"):
            snake[0].direction.x = 0;
            snake[0].direction.y = 1;
            break;
    }
}

function randColor(){
    return "rgb(" + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + ")";
}