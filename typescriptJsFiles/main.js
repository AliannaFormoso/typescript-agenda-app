"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person");
var address_1 = require("./address");
var mail_1 = require("./mail");
var phone_1 = require("./phone");
// Addresses
var addressPerson1 = new address_1.Address('Flora', 7, '3rd', 'D', 28013, 'Madrid', 'Madrid');
var addressPerson2 = new address_1.Address('Rambla', 2, '2nd', 'A', 8006, 'Barcelona', 'Catalunya');
var addressPerson3 = new address_1.Address('Maria Benlliure', 5, '1st', 'B', 46131, 'Bonrepos', 'Valencia');
var newaddress = new address_1.Address('Londres', 43, '4th', 'C', 41089, 'Sevilla', 'Sevilla');
// Mails
var mailPerson1 = new mail_1.Mail('Outlook', 'john@outlook.com');
var mailPerson2 = new mail_1.Mail('Hotmail', 'jane@hotmail.com');
var mailPerson3 = new mail_1.Mail('Yahoo', 'sam@yahoo.es');
var newemail = new mail_1.Mail('Gmail', 'mary@gmail.com');
// Phones
var phonePerson1 = new phone_1.Phone('Movil', 644995678);
var phonePerson2 = new phone_1.Phone('Home', 677889900);
var phonePerson3 = new phone_1.Phone('Work', 655443322);
var newphone = new phone_1.Phone('Land', 6990078);
// People
var person1 = new person_1.Person('John', 'Doe', 34, '12345678A', 'January 1st', 'Blue', 'M', 'Junior Data Analyst', addressPerson1, mailPerson1, phonePerson1);
var person2 = new person_1.Person('Jane', 'Smith', 23, '87654321B', 'February 2nd', 'Pink', 'F', 'Entry Level Front End', addressPerson2, mailPerson2, phonePerson2);
var person3 = new person_1.Person('Sam', 'Houston', 45, '34561290C', 'March 3rd', 'Red', 'M', 'Senior developer', addressPerson3, mailPerson3, phonePerson3);
// Array people
var arrayPeople = [person1, person2, person3];
function showList() {
    for (var i = 0; i < arrayPeople.length; i++) {
        arrayPeople[i].showPerson();
    }
}
console.log('\n ============================= List of People. No modifications =============================\n');
showList();
console.log('\n ============================= List of People. After Modifications =============================\n');
var changed = false;
for (var i = 0; i < arrayPeople.length; i++) {
    if (arrayPeople[i].id === '12345678A') {
        arrayPeople[i].addresses = newaddress;
        arrayPeople[i].mails = newemail;
        arrayPeople[i].phones = newphone;
        changed = true;
        break;
    }
}
if (changed) {
    console.log('\nSome details were modified:');
}
else {
    console.log('\nThe Id was not found');
}
showList();
