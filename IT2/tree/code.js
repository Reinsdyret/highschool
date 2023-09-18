let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let startVariable = document.getElementById("startVariable");
let ruleVariables = document.getElementById("ruleVariables");
let rules = document.getElementById("rules");
let gens = document.getElementById("generations");
let btnRun = document.getElementById("btnRun");

let theta = (2*Math.PI) / 360 * 25.7;
let length = 10;

let vectorMove = new Vector(0,-1);
let vectorPos = new Vector(canvas.width/2,canvas.height/2);

let commands = [
    ["F","+","-","[","]"],
    [line,rotateClock,rotateNoClock,posPush,posPop]
];

let stack = [];



btnRun.onclick = function(){
    let vars = [];
    let ruless = [];
    let temp = "";
    for(let i = 0; i<ruleVariables.value.length; i++){
        if(ruleVariables.value[i] == ","){
            vars.push(temp);
        }else{
            temp += ruleVariables.value;
        }
    }
    vars.push(temp);
    temp = "";
    for(let i = 0; i<rules.value.length; i++){
        if(rules.value[i] == ","){
            ruless.push(temp);
        }else{
            temp += rules.value;
        }
    }
    ruless.push(temp);
    draw(grow(startVariable.value,gens.value,vars,ruless));
}

function grow(str,generations,vars,ruless){
    let ruleVar = vars;
    let rule = ruless;
    let strCopy = str;
    let newStr = "";
    for(let j = 0; j<generations; j++){
        newStr = "";
        for(let i = 0; i<strCopy.length; i++){
                if(strCopy[i] == ruleVar[0]){
                    newStr += rule[0];
                }else if(strCopy[i] == ruleVar[0+1]){
                    newStr += rule[0+1]
                    
                }else{
                    newStr += strCopy[i];
                }
            
        }
        strCopy = newStr;
        console.log(strCopy);
    }
    
    return strCopy;
}


function draw(str){
    ctx.beginPath();
    ctx.moveTo(vectorPos.x,vectorPos.y);
    for(let i = 0; i<str.length; i++){
        for(let j = 0; j<commands[0].length; j++){
            if(str[i] == commands[0][j]){
                commands[1][j]();
            }
        }
    }
    ctx.stroke();
}

function posPush(){
    let a = {
        pos: vectorPos.clone(),
        move: vectorMove.clone()
    };
    stack.push(a);
}

function posPop(){
    vectorPos = stack[stack.length -1].pos;
    vectorMove = stack[stack.length -1].move;
    ctx.moveTo(vectorPos.x,vectorPos.y);
    stack.pop();
}

function rotateClock(){
    vectorMove.rotate(theta);
}

function rotateNoClock(){
    vectorMove.rotate(-theta);
}

function line(){
    let a = vectorMove.clone();
    a.multiply(length)
    vectorPos.add(a);
    ctx.lineTo(vectorPos.x,vectorPos.y);
}
