/*
LISTA COGNOMI
    1. chiedi all’utente il cognome
    2. inseriscilo in un array con altri cognomi
    3. stampa la lista ordinata alfabeticamente
    4. scrivi anche la posizione "umana"
 */



// 1.
var lastNameList = ['rossi', 'duzioni', 'bagnasco', 'giorgini', 'balsano', 'perlari'];
// console.log(lastNameList); //test
var lastNameInsert = [];
var end = '-1';
do{
    var userLastName = prompt('Insert lastname (-1 to end)').toLocaleLowerCase();
    if(userLastName != end){
        lastNameList.push(userLastName);
        lastNameInsert.push(userLastName);
    }
} while (userLastName != end)

// console.log(userLastName); //test

// 2.
console.log(lastNameList); //test

// 3.
console.log(lastNameList.sort());

// 4.
for(var i = 0; i < lastNameInsert.length; i++){
    console.log(lastNameList.indexOf(lastNameInsert[i]) + 1);
}
console.log(lastNameInsert);