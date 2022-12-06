//1 - Creare un prompt
//1.1 - Chiedere all'utente di inserire una parola
//2 - Creare una funzione con reverse per capire se la parola è palindroma
//3 - SE è palindroma
//3.1 - Allora stampa l'informazione all'utente 

function checkPalindroma(parola){

    let new_word = parola.split('').reverse().join('');
    
    if(new_word === parola){
        alert('La parola inserita è palindroma')
    }
    else{
        alert('La parola inserita non è palindroma')
    }
}

let word = prompt('Inserisci una parola')

checkPalindroma(word)