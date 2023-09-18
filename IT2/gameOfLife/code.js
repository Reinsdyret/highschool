let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let preGenerations = document.getElementById("generations");
let currentPopulation = document.getElementById("currentPopulation");
let generationsPerSecond = document.getElementById("generationsPerSeconds");
let preGenerationsPerSeconds = document.getElementById("generationsPerSecondsPre");
let btnStart = document.getElementById("btnStart");

let world, generations, interval;

btnStart.onclick = function(){
    generations = 0;
    world = populate(1000);
    /*world = [
        [0,0,1,1],
        [1,0,0,0],
        [1,1,0,0],
        [0,0,0,1]
    ];*/
    if(interval){
        clearInterval(interval);
    }
    interval = setInterval(run, 1000/generationsPerSecond.value);
    preGenerationsPerSeconds.innerHTML = generationsPerSecond.value + " generations per second."
}

function run(){
    currentPopulation.innerHTML = "Current Population \t \t \t" + population(world);
    preGenerations.innerHTML = "Generations \t \t \t \t" + generations;
    drawWorld(world);
    world = nextGeneration(world);

    generations++;
}

function population(world){
    //Recieves array of world and returns amount of cells that are alive(1).
    let num = 0;
    for(let i = 0; i<world.length; i++){
        for(let j = 0; j<world[i].length; j++){
            if(world[i][j] != 0){
                num++;
            }
        }
    }
    return num;
}

function populate(size){
    //Recieves size of array and returns array of randomly generated cells.
    let arr = new Array(size);
    for(let i = 0; i<arr.length; i++){
        arr[i] = new Array(size);
    }

    for(let i = 0; i<arr.length; i++){
        for(let j = 0; j<arr[i].length; j++){
            arr[i][j] = Math.floor(Math.random() * 2);
        }
    }

    return arr;
}

function aliveNextGeneration(arr){
    //Takes in 3x3 array with cell under investigation as arr[1][1]. Based on rules for survival it returns true or false.
    let populationAroundCenter = 0;
    let aliveNow = arr[1][1] == 1;
    

    for(let i = 0; i<arr.length; i++){
        for(let j = 0; j<arr[i].length; j++){
            if(arr[i][j] === 1) {populationAroundCenter++;}
        }
    }

    if(aliveNow){
        populationAroundCenter--;
        if(populationAroundCenter < 2 || populationAroundCenter > 3){
            return false;
        }else{
            return true;
        }
    }else{
        if(populationAroundCenter === 3){
            return true;
        }else{
            return false;
        }
    }
}

function drawWorld(world){
    //Draw rects based on world array
    ctx.clearRect(0,0,canvas.width,canvas.height);
    let blockSize = canvas.width / world.length;

    for(let i = 0; i<world.length; i++){
        for(let j = 0; j<world[i].length; j++){
            if(world[i][j] == 1){
                ctx.fillRect(j * blockSize,i*blockSize,blockSize,blockSize);
            }
        }
    }
}

function nextGeneration(world){
    //Take in current world and return next generation array.
    let newWorld = new Array(world.length);
    for(let i = 0; i<newWorld.length; i++){
        newWorld[i] = new Array(newWorld.length);
    }

    for(let row = 0; row<world.length; row++){
        for(let col = 0; col<world[row].length; col++){
            let cellBlock = [
                [
                world[(row + world.length - 1) % world.length] [(col -1 + world.length) % world.length], 
                world[(row + world.length -1) % world.length] [(col)],
                world[(row + world.length - 1) % world.length] [(col + 1) % world.length]
                ],
                [
                world[row] [(col -1 + world.length) % world.length],
                world[row] [col],
                world[row] [(col + 1 + world.length) % world.length]
                ],
                [
                world[(row + 1 + world.length) % world.length] [(col -1 + world.length) % world.length],
                world[(row + 1 + world.length) % world.length] [col],
                world[(row + 1 + world.length) % world.length] [(col + 1) % world.length]
                ]
            ];
            if(aliveNextGeneration(cellBlock)){
                newWorld[row][col] = 1;
            }else{
                newWorld[row][col] = 0;
            }
        }
    }

    return newWorld;
}