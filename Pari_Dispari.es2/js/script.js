//1 - L'utente inserisce pari o dispari
//2 - Inserisce in numero random da 1 a 5
//3 - Generiamo attraverso una funzione un numero a caso sempre da 1 a 5 per il computer
//4 - Sommiamo i due numeri
//5 - Controllare se la somma dei numeri è pari o dispari
//6 - SE la somma è pari restituisco hai vinto (true)
//7 - ALTRIMENTI  se la somma è dispari hai perso (false)

function numeroRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1)) +min;
}

function checkPariDisoari(somma){
    if(somma % 2 == 0){
        return "pari";
    }
    
    return "dispari";
}

let pari_dispari = prompt("Inserisci pari o dispari");
let num_user = parseInt(prompt("Inserisci un numero tra 1 e 5"))

let num_computer = numeroRandom(1,5);

let somma = num_user + num_computer;

let check = checkPariDisoari(somma);

if(pari_dispari == check){
    alert('Hai vinto')
}
else{
    alert('Hai perso')
}