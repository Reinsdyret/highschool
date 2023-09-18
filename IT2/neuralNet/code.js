class Perceptron {
    constructor(xTrain,yTrain, epoch = 1000, learningRate = 0.1){
        this.xTrain = xTrain;
        this.yTrain = yTrain;
        this.epoch = epoch;
        this.learningRate = learningRate;

        this.accuracy = 0;
        this.sample = 0;

        this.bias = 0;
        this.weights = new Array(xTrain[0].length);

        for(let n = 0; n < xTrain[0].length; n++){
            this.weights[n] = this.random();
        }
    }
    
    random(){return Math.random() * 2 - 1;}

    currentAccuracy() {
        return this.accuracy / this.samples
    }

    activation(n) {
        return n < 0 ? 0 : 1;
    }

    predict(input) {
        let total = this.bias;
        this.weights.forEach((w, index) => {total += input[index] * w });
        return this.activation(total);
    }

    fit() {
        for( let e = 0; e< this.epoch; e++){
            for(let i = 0; i < this.xTrain.length; i++ ){
                let prediction = this.predict(this.xTrain[i]);
                console.log('Exspected: ' + this.yTrain[i] + ' Model output: ' + prediction);

                this.yTrain[i] === prediction ? this.accuracy += 1 : this.accuracy -= 1;
                this.samples++;

                // calculate loss
                let loss = this.yTrain[i] - prediction;

                //update weights
                for(let w = 0; w < this.weights.length; w++){
                    this.weights[w] += loss * this.xTrain[i][w] * this.learningRate;
                }

                this.bias += loss * this.learningRate;
            }
            

        console.log(this.currentAccuracy());
        console.log(this.weights);
        }
    }
}
let x = [[1, 1, 1], [0, 0, 0], [1, 0, 1]];
let y = [1, 0, 1];
let p = new Perceptron(x, y);

p.fit();

