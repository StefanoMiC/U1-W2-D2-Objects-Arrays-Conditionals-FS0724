// ARRAY
// Gli array sono delle liste di elementi raggruppati sotto un unico identificativo (etichetta)
// Le liste possono contenere qualsiasi tipo di elemento, sarebbe meglio mantenere omogeneità nei tipi:
// quindi solo stringhe, solo numeri, solo booleani, solo oggetti e via dicendo...

// PER ACCEDERE AGLI ELEMENTI DELLA LISTA

// per accedere agli elementi useremo il loro INDICE (index). Inseriremo l'indice corrispondente all'elemento tra parentesi quadre nomeArray[index]
// Gli indici sono dei valori numerici associati alla posizione che occupa l'elemento e partono da 0!!! (non da 1!)

// Es. se ho un array di 3 elementi, il primo avrà indice 0, il secondo indice 1, il terzo indice 2!

const students = ["Andrea", "Giacomo", "Federica", "Marco", "Federico", "Luigi"]; // array di stringhe
const numbers = [10, 0, 3, 100, -20];
const booleans = [true, false, false, true];

const studentsObjs = [
  { name: "Andrea", surname: "Ceccarelli", skills: ["HTML", "CSS", "JS1"] },
  { name: "Adriana", surname: "Gaglio", skills: ["HTML", "CSS", "JS1"] },
  { name: "Alessandra", surname: "Russo", skills: ["HTML", "CSS", "JS1"] }
]; // array di oggetti

const arrOfArrays = [
  [0, 1],
  [2, 3],
  [4, 5],
  [6, 7],
  [8, 9],
  [10, 11]
];

console.log(arrOfArrays[4]); //  [8, 9]
console.log(arrOfArrays[4][1]); // 9
// in questo modo abbiamo acceduto al sotto array, ottenendo il singolo valore

console.log("Accedo a Giacomo, seconda posizione (indice 1):", students[1]);
console.log("Accedo a Marco, quarta posizione (indice 3):", students[3]);

// come ottenere il numero di elementi da un array in modo DINAMICO - .length (è una proprietà, come fosse quella di un oggetto)

console.log(students);
console.log(students.length);

let lastStudent = students[students.length - 1];
let lastStudent2 = students.at(-1); // contiamo a ritroso, -1 corrisponde all'ultimo elemento. è equivalente al metodo precedente

lastStudent = null;
console.log(students);
console.log("last student", lastStudent);

// console.log("last student2", lastStudent2);

// const secondStudObj = studentsObjs[1]; // in questo caso il riferimento all'oggetto contenuto in questa variabile punterà allo stessa area di memoria
// che usa l'array, di conseguenza modificare la varibile farà modificare ANCHE l'oggetto nell'array

// per evitare questo possiamo ricorrere ad uno dei due metodi seguenti:
// const secondStudObj = Object.assign({}, studentsObjs[1]);
const secondStudObj = structuredClone(studentsObjs[1]);

// ora modificare il cognome non inficerà anche la referenza originaria (cosa che non succede quando abbiamo a che fare con primitive)
secondStudObj.surname = "Smith";
console.log(secondStudObj); // questo oggetto è stato modificato

console.log(studentsObjs); // questo array rimane ora invariato

// volendo accedere ad un valore di un array conenuto in un oggetto facente parte di un array esterno:
console.log("array generale", studentsObjs); // array generale
console.log("elemento di primo livello dell'array, terza posizione, indice 2", studentsObjs[2]); // abbiamo acceduto ad un elemento di primo livello dell'array generale (object)
console.log("array nella proprietà interna 'skills' dell'oggetto", studentsObjs[2].skills); // accediamo alla proprietà interna dell'oggetto precedentemente selezionato (array)
console.log("seconda posizione dell'array, indice 1", studentsObjs[2].skills[1]); // sull'array accediamo alla seconda posizione, indice 1 (string)

// Modificare un array
// .push(...newElements) - aggiunge un nuovo elemento alla FINE dell'array (muta l'array originario)

students.push("Giuseppe", "Steven"); // ho modificato l'array originario aggiungendo un nuovo elemento alla fine
console.log(students);

studentsObjs.push({ name: "Riccardo", surname: "Santilli", skills: ["HTML", "CSS", "JS1"] });
console.log(studentsObjs);

// .pop() - elimina l'ULTIMO elemento di un array (muta l'array originario)
numbers.pop();
const hundred = numbers.pop(); // un secondo pop elimina anche il penultimo
console.log(numbers);
console.log(hundred); // hundred contiene l'elemento eliminato ritornato dall'operazione del pop che abbiamo catturato con la variabile

// .shift() - elimina il PRIMO elemento di un array (muta l'array originario)

numbers.shift(); // rimuove il primo elemento e lo ritorna (non lo stiamo catturando, non ci interessa in questo caso)
console.log(numbers);

// .unshift(...newElements) - aggiunge un elemento in prima posizione (mutando l'array originario) (è più dispendioso di risorse rispetto ad un push)
students.unshift("Caterina", "Danilo");
console.log(students);

// .sort() - mette in ordine alfabetico le stringhe di un array
students.sort();
console.log(students);

const newNumbers = [1, 1000, -10, 20, 40, 50];
newNumbers.sort(); // non adatto all'ordinamento di numeri (per il momento)
console.log(newNumbers);

// .slice(startIndex, endIndex) - serve a sezionare una porzione di un array esistente (dove "end" è escluso) -
// ci torna un NUOVO ARRAY con la porzione di elementi selezionati (NON MUTA l'array originario)
console.log(studentsObjs);

// la variabile è indispensabile per catturare il nuovo array che ci viene ritornato dal metodo slice
const newSelection = studentsObjs.slice(0, -1); // tutti gli elementi meno l'ultimo
console.log(newSelection);

const newSelection2 = studentsObjs.slice(2, 4); // indice 2 e 3 (4 escluso)
console.log(newSelection2);

const fruits = ["apple", "banana", "kiwi", "ananas"];
const fruitsClone = fruits.slice();

// .splice(startIndex, deleteCount, newElement) - elimina uno più elemento, in alternativa può essere usato per sostituire o aggiungere uno o più elementi
// (muta l'array originario)
fruitsClone.splice(2, 0, "pear"); // aggiunge un elemento in terza posizione (indice 2)
fruitsClone.splice(3, 1); // elimina 1 elemento in quarta posizione (indice 3)
fruitsClone.splice(3, 1, "papaya"); // elimina 1 elemento in quinta posizione e lo sostituisce (indice 4)

console.log(fruits); // originale invariato
console.log(fruitsClone); // clone che ha subito le modifiche
