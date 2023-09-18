class Block{
    x;
    y;
    xSpeed;
    ySpeed;
    color;
    gridLength;
    sideLength;

    constructor(x,y,xSpeed,ySpeed,enemy, sideLength){
        this.x = x;
        this.y = y;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.sideLength = sideLength;
    }

    update(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }

    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x,this.y,this.sideLength,this.sideLength);
    }

    respawn(width,height){
        let side = Math.round(Math.random() * 4 + 1);
        if(side == 1){
            this.x = 10;
            this.y = Math.random() * (height - 10) + 5;
            this.xSpeed = this.gridLength;
            this.ySpeed = 0;
        }else if(side == 2){
            this.y = 10;
            this.x = Math.random() * (width - 10) + 5;
            this.xSpeed = 0;
            this.ySpeed = this.gridLength;
        }else if(side == 3){
            this.x = width - 10
            this.y = Math.random() * (height - 10) + 5;
            this.xSpeed = -this.gridLength;
            this.ySpeed = 0;
        }else{
            this.y = height - 10;
            this.x = Math.random() * (width - 10) + 5;
            this.xSpeed = 0;
            this.ySpeed = -this.gridLength;
        }
    }
}