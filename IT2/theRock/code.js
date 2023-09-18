let rock = document.getElementById("rock");
let saks = document.getElementById("saks");
let paper = document.getElementById("paper");

let output = document.getElementById("output");
let p = document.getElementById("pOutput");
let result = document.getElementById("result");

let img;

let list = ['rock', 'paper', 'saks'];
let images = ['https://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-The-Rock-PNG-Transparent-Image.png', 'https://store.schoolspecialty.com/OA_HTML/xxssi_ibeGetWCCImage.jsp?docName=F1601708&Rendition=Large', 'https://m.media-amazon.com/images/S/aplus-media/vc/a7258b6a-eead-412c-b25f-3e718f610a56.jpg'];
rock.onclick = function(){
    let numba = Math.floor(Math.random() * 3);
    let word = list[numba];
    p.innerHTML = word;
    output.src = images[numba];
    if(word == 'paper'){
        result.innerHTML = "Hah you lose"
    }else if(word == 'saks'){
        result.innerHTML = "Oh no, rock too powerful"
    }else{result.innerHTML = "Rock is the best"}
}
saks.onclick = function(){
    let numba = Math.floor(Math.random() * 3);
    let word = list[numba];
    p.innerHTML = word;
    output.src = images[numba];
    if(word == 'rock'){
        result.innerHTML = "Hah you lose"
    }else if(word == 'paper'){
        result.innerHTML = "Oh no, saks too powerful"
    }else{result.innerHTML = "saks is the best"}
}

paper.onclick = function(){
    let numba = Math.floor(Math.random() * 3);
    let word = list[numba];
    p.innerHTML = word;
    output.src = images[numba];
    if(word == 'saks'){
        result.innerHTML = "Hah you lose"
    }else if(word == 'rock'){
        result.innerHTML = "Oh no, paper too powerful"
    }else{result.innerHTML = "paper is the best"}
}