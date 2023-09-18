let text = document.getElementById("text");
let btn = document.getElementById("btnTranslate");
let output = document.getElementById("morseOutput");
let btnSound = document.getElementById("btnSound");
let morseString;

let ref = [
   [ 'a' ,'.-'  ],
   [ 'b' ,'-...'],
   [ 'c' ,'-.-.'],
   [ 'd' ,'-..' ],
  [  'e' ,'.'  ],
   [ 'f' ,'..-.'],
   [ 'g' ,'--.' ],
   [ 'h' ,'....'],
  [  'i' ,'..' ],
   [ 'j' ,'.---'],
  [  'k' ,'-.-'],
   [ 'l' ,'.-..'],
   [ 'm' ,'--'  ],
   [ 'n' ,'-.'  ],
   [ 'o' ,'---' ],
   [ 'p' ,'.--.'],
   [ 'q' ,'--.-'],
   [ 'r' ,'.-.' ],
   [ 's' ,'...' ],
  [  't' ,'-'  ],
   [ 'u' ,'..-' ],
   [ 'v' ,'...-'],
   [ 'w' ,'.--' ],
   [ 'x' ,'-..-'],
   [ 'y' ,'-.--'],
   [ 'z' ,'--..'],
    ['1' ,'.----'],
    ['2' ,'..---'],
    ['3' ,'...--'],
    ['4' ,'....-'],
    ['5' ,'.....'],
    ['6' ,'-....'],
    ['7' ,'--...'],
    ['8' ,'---..'],
    ['9' ,'----.'],
    ['0' ,'-----']
];

btn.onclick = function(){
    morseString = "";
    output.innerHTML = "";
    let blæ = text.value.toLowerCase();
    for (i = 0; i < blæ.length; i++){
        for(let j = 0; j<ref.length; j++){
            if(ref[j][0] == blæ[i]){
                output.innerHTML += ref[j][1];
                morseString += ref[j][1];
            }
        }
    }
}
let i = 0;
let context = new AudioContext();
let o;
btnSound.onclick = function (){
    playSounds();
}

function playSounds(){
    if(morseString[i] == "."){
        o = context.createOscillator();
        o.type = "sine";
        o.connect(context.destination);
        o.start();
        setTimeout(stop,100);
    }else if(morseString[i] == "-"){
        o = context.createOscillator();
        o.type = "sine";
        o.connect(context.destination);
        o.start();
        setTimeout(stop,600);
    }
}

function stop(){
    o.stop()
    i++;
    setTimeout(playSounds,500);
}
