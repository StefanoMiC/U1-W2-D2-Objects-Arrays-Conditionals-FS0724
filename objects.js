console.log("Objects");

/* 
Un Oggetto in JS è una struttura che ci permette di descrivere meglio una qualche entità, tramite proprietà come coppie chiave-valore.
in tutte quelle situazioni in cui una variabile non ci basterebbe a descriverla completamente.

L'oggetto è una struttura composta da PROPRIETA' e racchiuso in parentesi GRAFFE.
una proprietà è composta da chiave:valore, e tutte le proprietà sono separate da virgole.
*/

// creiamo un oggetto

const obj = {}; // questo è un oggetto vuoto

{
  // le graffe in questo contesto, invece definiscono un blocco seperato di codice
  // QUESTO NON È UN OGGETTO!
}

const teacher = {
  name: "Stefano", // abbiamo creato la chiave chiamata name e valore "Stefano"
  surname: "Miceli", // string
  age: 30, // number
  drivingLicense: "C", // null
  gender: "M",
  hasWebcam: true, // boolean
  location: {
    // object
    region: "FVG",
    city: "Udine"
  },
  isLive: true,
  "e-mail": "stefano.miceli@gmail.com"
};

const isLive = teacher.isLive;
// DOT NOTATION - accedere ad una proprietà per ricevere indietro il valore corrispondente

console.log("teacher's name", teacher.name); // "Stefano"
console.log("teacher's age", teacher.age); // 30
console.log(teacher.street); // proprietà inesistente => undefined

console.log("teacher's driv. licence", teacher.drivingLicense);
console.log("teacher's driv. licence", teacher["drivingLicense"]);

// console.log("teacher's email", teacher.e - mail); // impossibile usare la dot notation in questo caso
console.log("teacher's email", teacher["e-mail"]); // in questo caso siamo obbligati ad usare la square brackets notation

// valutare un valore dinamico con la square brackets notation

const driving = "drivingLicense";

console.log(teacher.driving); // undefined - non esiste la proprietà chiamata driving
console.log(teacher[driving]); // "C" - funziona perché driving è trattata come variabile,
// quindi useremo il contenuto, ovvero la stringa "drivingLicense" // teacher["drivingLicense"]

const mail = "mail";

console.log(teacher["e-" + mail]); // teacher["e-mail"] ==> "stefano.miceli@gmail.com"
console.log(teacher["e-".concat(mail)]); // teacher["e-mail"] ==> "stefano.miceli@gmail.com"

// accedere a sottoproprietà dell'oggetto

console.log("teacher's city", teacher.location.city);
console.log("teacher's city", teacher["location"].city);
console.log("teacher's city", teacher["location"]["city"]);

// modificare una proprietà esistente

console.log("drivingLicense prima", teacher.drivingLicense);
teacher.drivingLicense = "B";
console.log("drivingLicense dopo", teacher.drivingLicense);

// creare una nuova proprietà
// accedo ad una proprietà inesistente e le assegno un valore. comincerà ad esistere da quel momento.
console.log(teacher.hairColor); // non esiste
teacher.hairColor = "light brown";
console.log(teacher.hairColor); // esiste dopo averla creata

teacher.location.street = "Vinci Street";
console.log(teacher);

// eliminare una proprietà esistente
console.log(teacher.isLive); // esiste
delete teacher.isLive;
console.log(teacher.isLive); // non esiste più

console.log(isLive);

// copiare un oggetto

// finché si tratta di primitive, queste vengono copiate direttamente senza problemi

let a = 20;
let b = a;
console.log("a prima", a);
console.log("b prima", b);

b = 3;

console.log("a dopo", a);
console.log("b dopo", b);

const person = {
  name: "John",
  surname: "Doe",
  age: 40,
  height: 190
};

const person2 = person;

person2.name = "Rafael";

console.log("person", person);
console.log("person2", person2);

// METODO #1 per la clonazione di oggetti Object.assign() - clonazione superficiale (shallow copy)

const additionalObj = { country: "Italy", age: 29 };

const person3 = Object.assign({}, person, additionalObj);
person3.name = "Giovanni";

console.log("person", person);
console.log("person3", person3);

// clonazione di oggetto con sotto referenza (oggetto interno)
const teacher2 = Object.assign({}, teacher);
teacher2.surname = "Casasola";

teacher2.location = Object.assign({}, teacher.location);
teacher2.location.street = "Corso Italia";

console.log(teacher);
console.log(teacher2);

// METODO #2 per la clonazione (PROFONDA) - structuredClone()

const teacher3 = structuredClone(teacher);
teacher3.location.street = "Corso Garibaldi";
console.log(teacher3);
