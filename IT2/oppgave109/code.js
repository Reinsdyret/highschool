let name = document.getElementById("name");
let tlf = document.getElementById("tlf");
let mail = document.getElementById("mail");
let btnAdd = document.getElementById("add");
let btnWrite = document.getElementById("write");
let pre = document.getElementById("pre");
let contacts = new Array();


btnAdd.onclick = function(){
    let newObject = {
        name: name.value,
        tlf: tlf.value,
        mail: mail.value
    }
    
    contacts.push(newObject);
}

btnWrite.onclick = function(){
    pre.innerHTML = "";
    for(let i = 0; i<contacts.length; i++){
        pre.innerHTML += contacts[i].name + ", " + contacts[i].tlf + ", " + contacts[i].mail + "\n";
    }
}