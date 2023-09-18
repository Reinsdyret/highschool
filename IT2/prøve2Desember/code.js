class Ticket {
    type;
    //Legger til month fordi date.getMonth() returnerer mellom 0 og 11
    month;
    date;
    time;
    number;
    price;
    mva;

    constructor(type,number){
        let date = new Date();
        this.type = ticketTypes[type];
        this.month = date.getMonth() + 1;
        this.date = date.getDay() + "." + this.month  + "." + date.getFullYear();
        this.time = date.getMinutes() + ":" + date.getSeconds();
        this.number = number;
        this.price = prices[type];
        this.mva = this.price  - (this.price / 108 * 100);
    }
}

//Definerer basis lister
let ticketTypes = ["Personbil", "Motorsykkel", "Lastebil"];
let prices = [150,100,375];
let ticketList = [];

//Definerer html elementer
let btnPersonbil = document.getElementById("personbil");
let btnMotorsykkel = document.getElementById("motorsykkel");
let btnLastebil = document.getElementById("lastebil");
let btnDagsoppgjør = document.getElementById("dagsoppgjør");
let preTicket = document.getElementById("ticket");



//Funksjon for å skrive billett kvittering
function writeTicket(){
    preTicket.innerHTML = "Ferjeselskapet AS \n"
                        + ticketList[ticketList.length - 1].date + " " + ticketList[ticketList.length - 1].time + "\n"
                        + "#" + ticketList[ticketList.length - 1].number + "\n"
                        + "\n"
                        + "1 x " + ticketList[ticketList.length - 1].type + "  " + ticketList[ticketList.length - 1].price + ",-" + "\n"
                        + "Inkl. mva.(8%): " + ticketList[ticketList.length - 1].mva.toFixed(2);
}

//Funksjon for å lage nytt objekt ticket med type personbil
btnPersonbil.onclick = function(){
    ticketList.push(new Ticket(0,ticketList.length + 1));
    writeTicket();
}

//Funksjon for å lage nytt objekt ticket med type motorsykkel
btnMotorsykkel.onclick = function(){
    ticketList.push(new Ticket(1,ticketList.length + 1));
    writeTicket();
}

//Funksjon for å lage nytt objekt ticket med type lastebil
btnLastebil.onclick = function(){
    ticketList.push(new Ticket(2,ticketList.length + 1));
    writeTicket();
}

//Funksjon som går gjennom listen av billetter, henter ut antall av hver og summerer prisene. Skriver deretter ut dagsoppgjør
btnDagsoppgjør.onclick = function(){
    let personbiler = 0;
    let motorsykkeler = 0;
    let lastebiler = 0;
    let totalSum = 0;

    for(let i = 0; i<ticketList.length; i++){
        //Bruker switch for å unngå masse if og else if
        switch(ticketList[i].type){
            case("Personbil"):
                personbiler++;
                break;
            case("Motorsykkel"):
                motorsykkeler++;
                break;
            case("Lastebil"):
                lastebiler++;
                break;
        }
        totalSum += ticketList[i].price;
    }
    //Utskrivning av dagsoppgjør
    preTicket.innerHTML = "Ferjeselskapet AS \n"
                        + "Dagsoppgjør \n"
                        + "Personbiler: " + personbiler + "\n"
                        + "Motorsykler: " + motorsykkeler + "\n"
                        + "Lastebiler: " + lastebiler + "\n"
                        + "Totalt salg: " + totalSum + "kr";
}