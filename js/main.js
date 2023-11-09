//---------Inizio Esercizio---------//

let name = prompt("Inserisci il tuo nome");
let surname = prompt("Inserisci il tuo cognome");
let favoriteColor = prompt("Inserisci il tuo colore preferito");
let password1 = name + surname + favoriteColor + 21;
//--Prima parte Bonus--//
let number = prompt("Inserisci un numero");
let number2 = prompt("Inserisci un secondo numero");
number = parseInt(number);
number2 = parseInt(number2);
let password2 = name + surname + favoriteColor + number/number2;

let yourCredential = `
---------- Inserisci le tue credenziali per creare una nuova password -----------

>--- Informazioni Personali ---

Nome: ${name}
Cognome: ${surname}
Nome e Cognome: ${name} ${surname}
Colore preferito: ${favoriteColor}

La tua prima Password: ${password1}
La tua seconda password: ${password2}

`

console.log(yourCredential);
