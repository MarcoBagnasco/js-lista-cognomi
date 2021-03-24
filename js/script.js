/*
LISTA COGNOMI
    1. chiedi all’utente il cognome
    2. inseriscilo in un array con altri cognomi
    3. stampa la lista ordinata alfabeticamente
    4. scrivi anche la posizione "umana"
 */



// 1.
var lastNameList = ['rossi', 'duzioni', 'bagnasco', 'giorgini', 'balsano', 'perlari'];
console.log(lastNameList); //test

var userLastName = prompt('Insert lastname').toLocaleLowerCase();
console.log(userLastName); //test

// 2.
lastNameList.push(userLastName);
console.log(lastNameList); //test

// 3.
lastNameList.sort();
console.log(lastNameList);