class Person{
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new Person('Hero','Honda',430000);
console.log(heroPerson);
const friendlyPerson = new Person('Kawasaki','zx25r',1200000);
console.log(friendlyPerson);
