/*
LISTA COGNOMI
    1. chiedi all’utente il cognome
    2. inseriscilo in un array con altri cognomi
    3. stampa la lista ordinata alfabeticamente
    4. scrivi anche la posizione "umana"
 */

var lastNameList = ['rossi', 'duzioni', 'bagnasco', 'giorgini', 'balsano', 'perlari'];
console.log(lastNameList); //test

var userLastName = prompt('Insert lastname');
console.log(userLastName); //test

lastNameList.push(userLastName);
console.log(lastNameList); //test