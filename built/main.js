"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = require("./classes/person");
const address_1 = require("./classes/address");
const mail_1 = require("./classes/mail");
const phone_1 = require("./classes/phone");
function buildAgenda() {
    let agenda = [];
    const addressPerson0 = new address_1.Address('Calle Antonio Vázquez', 60, 1, 'A', 38700, 'Santa Cruz', 'La Palma');
    const person0 = new person_1.Person('Alicia', 'Torres Munguina', 41, '67907466R', new Date(1980, 11, 2), 'Marron', 'Mujer', [addressPerson0], [new mail_1.Mail('Personal', 'aliciatorresmunguia@armyspy.com')], [new phone_1.Phone('Personal', 738420516)], '2005 Nissan Xterra');
    const addressPerson1 = new address_1.Address('Calle Ourense', 78, 2, 'B', 42150, 'Vinuesa', 'Soria');
    const person1 = new person_1.Person('Benito', 'Hurtado Vanegas', 32, '90653390X', new Date(1990, 2, 16), 'Verde', 'Hombre', [addressPerson1], [new mail_1.Mail('Trabajo', 'hurtadovanegas@dayrep.com')], [new phone_1.Phone('Trabajo', 778814885)], '1993 Italdesign Nazca');
    const addressPerson2 = new address_1.Address('Calle Angosto', 86, 1, '', 23520, 'Bejígar', 'Jaén');
    const person2 = new person_1.Person('Bonifacia', 'Cadena Burgos', 58, '76929374L', new Date(1963, 11, 14), 'Morado', 'Mujer', [addressPerson2], [new mail_1.Mail('Personal', 'bonicb@armyspy.com')], [new phone_1.Phone('Personal', 793004982)], '2008 Nissan Sentra');
    agenda.push(person0);
    agenda.push(person1);
    agenda.push(person2);
    return agenda;
}
function showAgenda(agenda) {
    for (const person of agenda) {
        console.log(person.showPersonInfo());
    }
}
function addNewPersonData(dniNumber, newAddress, newMail, newPhone) {
    for (const person of agenda) {
        if (person.dni === dniNumber) {
            person.addAddress(newAddress);
            person.addMail(newMail);
            person.addPhone(newPhone);
        }
    }
}
function changePersonData(dniNumber, newAddress, newMail, newPhone) {
    for (const person of agenda) {
        if (person.dni === dniNumber) {
            person.setAddress(newAddress);
            person.setMail(newMail);
            person.setPhone(newPhone);
        }
    }
}
let agenda = buildAgenda();
showAgenda(agenda);
const dniPerson1 = '67907466R';
const newAddressPerson1 = new address_1.Address('Calle Señores Curas', 5, 1, 'B', 16660, 'Prado del Rey', 'Cádiz');
const newMailPerson1 = new mail_1.Mail('Personal', 'ali@armyspy.com');
const newPhonePerson1 = new phone_1.Phone('Personal', 680306151);
const dniPerson2 = '76929374L';
const changeAddressPerson2 = new address_1.Address('Plaza de España', 28, 3, 'A', 15613, 'A Capela', 'La Coruña');
const changeMailPerson2 = new mail_1.Mail('Personal', 'boni@armyspy.com');
const changePhonePerson2 = new phone_1.Phone('Personal', 736277449);
addNewPersonData(dniPerson1, newAddressPerson1, newMailPerson1, newPhonePerson1);
changePersonData(dniPerson2, changeAddressPerson2, changeMailPerson2, changePhonePerson2);
showAgenda(agenda);
