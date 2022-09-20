// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()
//let HeureActuelle = new Date();//

//Stocker l'heure , minute , seconde  dans des varaiables
/*let heure = HeureActuelle.getHours();
let minute = HeureActuelle.getMinutes();
let secondes = HeureActuelle.getSeconds();*/

// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde

// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré
let HeureActuelle = new Date();

let heure = HeureActuelle.getHours();
let minute = HeureActuelle.getMinutes();
let seconde = HeureActuelle.getSeconds();
console.log(heure);
const degHeure = 0.00833;
const degMinute = 0.1;
const degSeconde = 6;

let heure_Actuelle = heure * degHeure * 3600 + degHeure * 60 * minute;
console.log(heure_Actuelle);
let minute_Acuelle = minute * degMinute * 60;
//console.log(minute_Acuelle);
let seconde_Actuelle = seconde * degSeconde;
AIGUILLEHR.style.transform = `rotate(${heure_Actuelle}deg)`;
console.log(heure_Actuelle);
AIGUILLEMIN.style.transform = `rotate(${minute_Acuelle}deg)`;
AIGUILLESEC.style.transform = `rotate(${seconde_Actuelle}deg)`;
// Déplacer les aiguilles
function demarrerLaMontre() {
  AIGUILLEHR.style.transform += `rotate(${degHeure}deg)`;
  //console.log(AIGUILLEHR.style.transform);
  AIGUILLEMIN.style.transform += `rotate(${degMinute}deg)`;
  AIGUILLESEC.style.transform += `rotate(${degSeconde}deg)`;
  //console.log(AIGUILLESEC.style.transform);
}
// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);
