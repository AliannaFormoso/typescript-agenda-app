import {Person} from "./person"
import { Address } from "./address"
import { Mail } from "./mail"
import { Phone } from "./phone"


// Addresses
let addressPerson1 = new Address('Flora', 7, '3rd', 'D', 28013, 'Madrid', 'Madrid');
let addressPerson2 = new Address('Rambla', 2, '2nd', 'A', 8006, 'Barcelona', 'Catalunya');
let addressPerson3 = new Address('Maria Benlliure', 5, '1st', 'B', 46131, 'Bonrepos', 'Valencia');

let newaddress = new Address('Londres', 43, '4th', 'C', 41089, 'Sevilla', 'Sevilla');


// Mails
let mailPerson1 = new Mail('Outlook', 'john@outlook.com');
let mailPerson2 = new Mail('Hotmail', 'jane@hotmail.com');
let mailPerson3 = new Mail('Yahoo', 'sam@yahoo.es')

let newemail = new Mail('Gmail', 'mary@gmail.com')


// Phones
let phonePerson1 = new Phone('Movil', 644995678);
let phonePerson2 = new Phone('Home', 677889900);
let phonePerson3 = new Phone('Work', 655443322);

let newphone = new Phone('Land', 6990078);


// People
let person1 = new Person('John', 'Doe', 34, '12345678A', 'January 1st', 'Blue', 'M', 'Junior Data Analyst', addressPerson1, mailPerson1, phonePerson1);
let person2 = new Person('Jane', 'Smith', 23, '87654321B', 'February 2nd', 'Pink', 'F', 'Entry Level Front End', addressPerson2, mailPerson2, phonePerson2);
let person3 = new Person('Sam', 'Houston', 45, '34561290C', 'March 3rd', 'Red', 'M', 'Senior developer', addressPerson3, mailPerson3, phonePerson3);

// Array people

let arrayPeople: Person[] = [person1,person2,person3];

function showList():void{
    for (let i=0; i<arrayPeople.length;i++) {
        arrayPeople[i].showPerson();
    }
}


console.log('\n ============================= List of People. No modifications =============================\n');
showList();

console.log('\n ============================= List of People. After Modifications =============================\n')

let changed:boolean=false;

for (let i=0; i<arrayPeople.length; i++) {
    if (arrayPeople[i].id==='12345678A') {
        arrayPeople[i].addresses=newaddress;
        arrayPeople[i].mails=newemail;
        arrayPeople[i].phones=newphone;
        changed=true;
        break;
    }
}

if (changed) {
    console.log('\nSome details were modified:');
} else { 
    console.log('\nThe Id was not found');

}

showList();