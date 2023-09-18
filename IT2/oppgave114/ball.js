class Ball {
    x;
    y;
    radius;
    angle;
    xSpeed;
    ySpeed;
    velocity;
    ctx = null;

    constructor(canvas){
        this.ctx = canvas;
        this.radius = Math.floor(Math.random() * 5);
        this.x = Math.floor(Math.random() * (500-this.radius * 2))+ this.radius;
        this.y = Math.floor(Math.random() * (400-this.radius * 2))+ this.radius;
        this.velocity = Math.floor(Math.random() * 6 -3);
        this.angle = Math.floor(Math.random()*360);

        while(this.velocity<0.3 && this.velocity > -0.3){
            this.velocity = Math.floor(Math.random() * 2 -1);
        }

        this.xSpeed = Math.cos(this.angle) * this.velocity;
        this.ySpeed = Math.sin(this.angle) * this.velocity;
    }

    update(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x + this.radius >= 500 || this.x - this.radius <= 0){
            this.xSpeed *= -1;
        }
        if(this.y + this.radius >= 400 || this.y - this.radius <=0){
            this.ySpeed *= -1;
        }
    }

    draw(){
        this.ctx.beginPath();
        this.ctx.arc(this.x,this.y,this.radius,0,2*Math.PI);
        this.ctx.stroke();
    }

    collision(nextBall){
        let distanceToBall = Math.sqrt(Math.pow(nextBall.x - this.x,2) + Math.pow(nextBall.y - this.y,2));
        let sumRad = this.radius + nextBall.radius;

        if(distanceToBall < sumRad){
            this.xSpeed *= -1;
            this.ySpeed *= -1;
            nextBall.xSpeed *= -1;
            nextBall.ySpeed *= -1;
        }else{
            return false;
        }

    }

}