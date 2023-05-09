
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

// var zahl1 = prompt("Bitte gib mir die ertse Zahl ein:");
// var zahl2 = prompt("Bitte gib mir die Zweite Zahl ein:");

// console.log(zahl1+zahl2);

// let zahl1 = prompt("Bitte gib mir die ertse Zahl ein:");
// let zahl2 = prompt("Bitte gib mir die ertse Zahl zwei:");

// zahl1 = parseInt (zahl1);
// zahl2 = parseInt (zahl2);

// console.log(zahl1+zahl2);



let zahl1 = prompt("Bitte gib mir die ertse Zahl ein:");
let zahl2 = prompt("Bitte gib mir die ertse Zahl zwei:");
let operation = prompt("Welche Rechenoperation möchtest du durchführen? (+, -, *, /)");


zahl1 = parseFloat(zahl1);
zahl2 = parseFloat(zahl2);



let result;
if (operation === "+") {
  result = zahl1 + zahl2;
} else if (operation === "-") {
  result = zahl1 - zahl2;
} else if (operation === "*") {
  result = zahl1 * zahl2;
} else if (operation === "/") {
  result = zahl1 / zahl2;
} else {
  console.log("Ungültige Eingabe");
}


console.log("Das Ergebnis ist: " + result);
