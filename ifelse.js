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

const candidate = {
  name: "Giovanni",
  surname: "Storti",
  age: 44,
  hasDrivingLicense: true
};

if (candidate.age > 18) {
  if (candidate.age < 45) {
    if (candidate.hasDrivingLicense === true) {
      alert("complimenti, sei assunto!");
    } else {
      alert("peccato, bastava così poco. torna dopo aver conseguito la patente");
    }
  } else {
    console.log("Ci dispiace ma hai superato l'età massima");
  }
}

const candidate2 = {
  name: "Giovanni",
  surname: "Rossi",
  age: 14,
  hasDrivingLicense: true
};

// avere controlli annidati o sullo stesso livello non è la stessa cosa
if (candidate2.age > 18) {
  console.log("Il candidato è maggiorenne");
} else if (candidate2.age > 18 && candidate2.age < 45) {
  // con un'età di 80 anni, qui non ci arriveremmo MAI....
  if (candidate2.hasDrivingLicense === true) {
    alert("complimenti, sei assunto!");
  } else {
    alert("peccato, bastava così poco. torna dopo aver conseguito la patente");
  }
} else {
  console.log("Ci dispiace sei troppo giovane");
}

const userName = prompt("come ti chiami?");

// if (userName) {
//   if (userName.toLowerCase() === "mario" || userName.toLowerCase() === "stefano") {
//     alert("Perfetto, sei promosso!");
//   } else {
//     alert("Non ci piaci, vai via");
//   }
// } else {
//   alert("devi inserire un nome valido per procedere");
// }

// in questo caso il console log si visualizzerà SE e solo SE l'utente avrà inserito un valore nel prompt,
// in caso di stringa vuota, questa ha accezione negativa, e non si eseguirà il blocco interno
// (vedi valori falsy)
// if (userName) {
//   console.log("il valore inserito è:", userName);
// }

// combiniamo le due cose
if (userName) {
  if (userName.toLowerCase() === "mario" || userName.toLowerCase() === "stefano") {
    alert("Perfetto, sei promosso!");
  } else {
    alert("Non ci piaci, vai via");
  }
} else {
  const userName = prompt("dai... dimmi come ti chiami?");
  if (userName) {
    if (userName.toLowerCase() === "mario" || userName.toLowerCase() === "stefano") {
      alert("Perfetto, questa volta sei promosso!");
    } else {
      alert("No no.. non ci siamo proprio");
    }
  }
}

const result = 10 * 0;

// qui stiamo valutando il valore per la sua accezzione intrinseca (se il valore è 0 potrebbe non visualizzarsi mai il console.log)
if (result) {
  console.log("il valore ottenuto è", result);
}

const result2 = 10 * 0;

// questa versione è più sicura, perché visualizzeremmo anche un valore 0
if (result2 >= 0) {
  console.log("il valore ottenuto è", result2);
}
