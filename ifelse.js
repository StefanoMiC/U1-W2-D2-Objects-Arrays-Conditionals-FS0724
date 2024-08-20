// condizionali if/else, sono un costrutto che ci permette di abilitare uno o l'altro blocco di codice a seconda di condizioni che possono verificarsi o meno
// quindi possiamo manipolare il flusso (o direzione) che può prendere il programma

// sintassi:

// if(condizione) {
//     blocco di codice per condizione verificata
// } else {
//     blocco di codice per condizione NON verificata
// }

const num = 0;

// un if può anche servire per "proteggere" un blocco di codice dall'eserguirsi in condizioni non ottimali
if (num === 55) {
  console.log("il numero è quello che cercavi! (55)");
}

if (num < 10) {
  console.log("numero è inferiore a 10");
} else {
  // l'else non è obbligatorio ma ci permette di scatenare il blocco di codice alternativo nel caso in cui la condizione non si verifichi
  console.log("il numero è sicuramente superiore o uguale a 10");
}

const eyeColor = "brown";
const height = 120;
const hairColor = "green";

// possiamo andare a valutare più condizioni nel caso in cui la prima non si verifichi, e non ci basti solo un else
if ((eyeColor === "gray" || eyeColor === "blue" || eyeColor === "green") && height > 130 && (hairColor === "brown" || hairColor === "blonde")) {
  alert("vai bene, puoi entrare");
} else if (eyeColor === "gray" || eyeColor === "blue" || eyeColor === "green") {
  console.log("gli occhi andavano bene");
} else if (height > 130) {
  console.log("l'altezza era giusta");
} else if (hairColor === "brown" || hairColor === "blonde") {
  console.log("colore dei capelli è ok");
} else {
  console.log("non vai bene per niente!");
}

const student = {
  name: "Mario",
  age: 30
};

let isAdmitted = false;

if (student.name === "Mario") {
  isAdmitted = true; // la variabile è globale, ma possiamo modificarla se e solo se la condizione si verifica
}

// sintassi equivalente e più sintetica
// let isAdmitted = student.name === "Mario" ? true : false;

console.log("lo studente è ammesso?", isAdmitted); // leggere la variabile DOPO un if ci farà vedere il risultato finale dell'operazione
// se la condizione nell'if non si è verificata la variabile rimarrà a false.
