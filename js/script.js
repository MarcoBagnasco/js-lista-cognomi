/*
    LISTA COGNOMI
    1. chiedi all’utente il cognome
    2. inseriscilo in un array con altri cognomi
    3. stampa la lista ordinata alfabeticamente
    4. scrivi anche la posizione "umana"
 */

// 1. // 2.
var lastNameList = ['rossi', 'duzioni', 'bagnasco', 'giorgini', 'balsano', 'perlari'];

var lastNameInsert = [];
var end = '-1';
do{
    var userLastName = prompt('Insert lastname (-1 to end)').toLocaleLowerCase().trim();
    if(userLastName != end){
        lastNameList.push(userLastName);
        lastNameInsert.push(userLastName);
    }
} while (userLastName != end)

// Print unsorted array
var items ='';
for(var i = 0; i < lastNameList.length; i++){

    if(lastNameInsert.includes(lastNameList[i])){
        items += '<li class="insert">' + lastNameList[i] + '</li>'; 
    } else{
        items += '<li>' + lastNameList[i] + '</li>';
    }
}
document.getElementById('unsorted-list').innerHTML = items;

// 3.
console.log(lastNameList.sort());
items = '';
for(var i = 0; i < lastNameList.length; i++){
    if(lastNameInsert.includes(lastNameList[i])){
        items += '<li class="insert">' + lastNameList[i] + '</li>'; 
    } else{
        items += '<li>' + lastNameList[i] + '</li>';
    }
}
document.getElementById('sorted-list').innerHTML = items;

// 4.
items = '';
for(var i = 0; i < lastNameInsert.length; i++){
    items += '<li>' + (lastNameList.indexOf(lastNameInsert[i]) + 1) + '</li>';
}
document.getElementById('position-list').innerHTML = items;