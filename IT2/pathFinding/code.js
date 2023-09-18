let canvas = document.getElementById("canv");
let ctx = canvas.getContext('2d');

let maze =[
    [1,1,1,1],
    [1,0,1,1,1],
    [1,0,0,1,1],
    [1,1,0,2,1],
    [1,1,1,1]
];
let lastPosition;
let position = {
    x:1,
    y:1
};

let goal = {
    x:2,
    y:2
};
let route = [
    [0,0]
];

iteration();

function iteration(){
    if(checkGoal(position,goal)){
        return "Route found " + makeRoute(route);
    }
    //move(maze,position,goal);
    console.log(move(maze,position.x,position.y));
}

function checkGoal(pos,goal){
    if(pos.x == goal.x){
        return true;
    }else{
        return false;
    }
    
}

function move(m,x,y){
    let moves = [];
    for(let i = 0; i<4;i++){
        if(m[y][x-1] != "Undefined"  && m[y][x - 1] != 1){
            moves.push([y,x-1]);
            x-=1;
        }else if(m[y][x+1] != "Undefined"  && m[y][x + 1] != 1){
            moves.push([y,x+1]);
            x+=1;
        }else if(m[y + 1][x] != "Undefined"  && m[y + 1][x] != 1){
            moves.push([y+1,x]);
            y+=1;
        }else if(m[y - 1][x] != "Undefined"  && m[y - 1][x] != 1){
            moves.push([y-1,x]);
            y-=1;
        }
    }
    return moves;
}

function makeRoute(r){
    let temp = "";
    let pos;
    for(let i = 0; i< r.length; i++){
        for(let j = 0; j<2;j++){
            pos = String(r[i][j]);
            temp += "[" + pos + "]";
            
        }
        temp += "->";
    }
    return temp;
}

