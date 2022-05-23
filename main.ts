import { Person } from './person';
import { Address } from './address';
import { Mail } from './mail';
import { Phone } from './phone';

function buildAgenda(): Array<Person> {
	let agenda: Array<Person> = [];

	const addressPerson0: Address = new Address(
		'Calle Antonio Vázquez',
		60,
		1,
		'A',
		38700,
		'Santa Cruz',
		'La Palma'
	);
	const person0: Person = new Person(
		'Alicia',
		'Torres Munguina',
		41,
		'67907466R',
		new Date(1980, 11, 2),
		'Marron',
		'Mujer',
		[addressPerson0],
		[new Mail('Personal', 'aliciatorresmunguia@armyspy.com')],
		[new Phone('Personal', 738420516)],
		'2005 Nissan Xterra'
	);
	const addressPerson1: Address = new Address(
		'Calle Ourense',
		78,
		2,
		'B',
		42150,
		'Vinuesa',
		'Soria'
	);
	const person1: Person = new Person(
		'Benito',
		'Hurtado Vanegas',
		32,
		'90653390X',
		new Date(1990, 2, 16),
		'Verde',
		'Hombre',
		[addressPerson1],
		[new Mail('Trabajo', 'hurtadovanegas@dayrep.com')],
		[new Phone('Trabajo', 778814885)],
		'1993 Italdesign Nazca'
	);
	const addressPerson2: Address = new Address(
		'Calle Angosto',
		86,
		1,
		'',
		23520,
		'Bejígar',
		'Jaén'
	);
	const person2: Person = new Person(
		'Bonifacia',
		'Cadena Burgos',
		58,
		'76929374L',
		new Date(1963, 11, 14),
		'Morado',
		'Mujer',
		[addressPerson2],
		[new Mail('Personal', 'bonicb@armyspy.com')],
		[new Phone('Personal', 793004982)],
		'2008 Nissan Sentra'
	);
	agenda.push(person0);
	agenda.push(person1);
	agenda.push(person2);
	return agenda;
}

function showAgenda(agenda: Array<Person>): void {
	for (const person of agenda) {
		console.log(person.showPersonInfo());
	}
}

function addNewPersonData(
	dniNumber: string,
	newAddress: Address,
	newMail: Mail,
	newPhone: Phone
): void {
	for (const person of agenda) {
		if (person.dni === dniNumber) {
			person.addAddress(newAddress);
			person.addMail(newMail);
			person.addPhone(newPhone);
		}
	}
}

function changePersonData(
	dniNumber: string,
	newAddress: Address,
	newMail: Mail,
	newPhone: Phone
): void {
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

const dniPerson1: string = '67907466R';
const newAddressPerson1: Address = new Address(
	'Calle Señores Curas',
	5,
	1,
	'B',
	16660,
	'Prado del Rey',
	'Cádiz'
);
const newMailPerson1: Mail = new Mail('Personal', 'ali@armyspy.com');
const newPhonePerson1: Phone = new Phone('Personal', 680306151);

const dniPerson2: string = '76929374L';
const changeAddressPerson2: Address = new Address(
	'Plaza de España',
	28,
	3,
	'A',
	15613,
	'A Capela',
	'La Coruña'
);
const changeMailPerson2: Mail = new Mail('Personal', 'boni@armyspy.com');
const changePhonePerson2: Phone = new Phone('Personal', 736277449);

addNewPersonData(dniPerson1, newAddressPerson1, newMailPerson1, newPhonePerson1);
changePersonData(dniPerson2, changeAddressPerson2, changeMailPerson2, changePhonePerson2);
showAgenda(agenda);