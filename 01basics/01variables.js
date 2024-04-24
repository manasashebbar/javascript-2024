const accountId = 1445567; //whose value cannot be changes. use when u want to lock a value.
let accountEmail = "manasa.google.com";
var accountPassword = "123567";
accountCity = "Udupi"; // soft type language.
let accountState;

//accountId = 557577; Not allowed

accountEmail ="hc@yahoo.com";
accountPassword="44y577";
accountEmail = "Jaipur";
console.log(accountId);

/*
Prefer ot to use var due issue with block scope and function scope
*/
console.table([accountEmail, accountPassword, accountId, accountCity, accountState]);