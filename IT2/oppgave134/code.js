let input = document.getElementById("inp");
let pre = document.getElementById("pre");

let convert = [
    ["æ","ø","å"],
    ["ae","oe","aa"],
    ["Æ","Ø","Å"],
    ["Ae","Oe","Aa"]
];

console.log(convert);

input.addEventListener('input',function(){
    internalize(input.value);
});

function internalize(text){
    let newString = "";
    for(let i = 0; i<text.length; i++){
        if(convert.some(row => row.includes(text[i]))){
            newString += newChar(text[i]);
        }else{
            newString += text[i];
        }
        
    }
    pre.innerHTML = newString;
}

function newChar(chara){
    for(let i = 0; i<convert.length; i++){
        for(let j = 0; j<convert[i].length; j++){
            if(convert[i][j] == chara){
                return convert[i+1][j];
            }
        }
    }
}