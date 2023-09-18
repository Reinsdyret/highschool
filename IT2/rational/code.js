class Rational{
    teller = null;
    nevner = null;

    constructor(x,y){
        this.teller = x;
        this.nevner = y;
    }

    multiplyBy(b){
        this.teller *= b.teller;
        this.nevner *= b.nevner;
    }

    add(b){
        if(this.nevner != b.nevner){
            this.teller *= b.nevner;
            this.teller += (this.nevner * b.teller);
            this.nevner *= b.nevner;
        }else{
            this.teller += b.teller;
        }
        
    }

    divideBy(b){
        let a = this.teller;
        this.teller = this.nevner;
        this.nevner = a;
        this.teller *= b.teller;
        this.nevner *= b.nevner;
    }

    toString(){
        return this.teller + "/" + this.nevner;
    }

    shorten(){
        if(this.teller == 1 && this.nevner == 1){
            return false;
        }
        let tellerFaktor = [];
        let nevnerFaktor = [];

        //Finner faktorer i telleren og legger til i liste
        for(let i = 2; i<=this.teller; i++){
            while(this.teller % i == 0){
                tellerFaktor.push(i);
                this.teller /= i;
            }
        }
        //Finner faktorer i nevneren og legger til i liste
        for(let i = 2; i<=this.nevner; i++){
            while(this.nevner % i == 0){
                nevnerFaktor.push(i);
                this.nevner /= i;
            }
        }
        //Sjekker for felles faktorer i nevner og teller og fjerner dem
        for(let i = 0; i<tellerFaktor.length; i++){
            for(let j = 0; j<nevnerFaktor.length; j++){
                if(tellerFaktor[i] == nevnerFaktor[j]){
                    tellerFaktor.splice(i,1);
                    nevnerFaktor.splice(j,1);
                }
            }
        }

        this.teller = 1;
        this.nevner = 1;

        if(nevnerFaktor.length != 0){
            for(let i = 0; i<nevnerFaktor.length; i++){
                this.nevner *= nevnerFaktor[i];
            }
        }
        if(tellerFaktor.length != 0){
            for(let i = 0; i<tellerFaktor.length; i++){
                this.teller *= tellerFaktor[i];
            }
        }
    }
}

let pre = document.getElementById("pre");

let a = new Rational(10,3);
let b = new Rational(30,2);

a.multiplyBy(b);
a.shorten();

pre.innerHTML = a.toString();