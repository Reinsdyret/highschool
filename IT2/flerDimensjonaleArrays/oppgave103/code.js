let cities = ["Askim", "Halden", "Fredrikstad", "Moss", "Ørje"];
let distances = [
    [0,62.3,58.8,44.6,33.2],
    [62.3,0,37.9,65.3,60.1],
    [58.8,37.9,0,40.5,78.5],
    [44.6,65.3,40.5,0,77.6],
    [33.2,60.1,78.5,77.6,0]
];

let route = ["Halden", "Ørje", "Fredrikstad", "Askim"];

console.log(distanceRoute(route));
console.log(bicycleTime(distanceRoute(route)));

function distanceRoute(arr){
    let distance = 0;
    for(let i = 0; i<arr.length - 1; i++){
        let a = cities.indexOf(arr[i]);
        let b = cities.indexOf(arr[i+1]);
        distance += distances[a][b];
        
    }
    return distance;
}

function bicycleTime(dist){
    return Math.floor(dist/20);
}