const normalPerson = {
    firstName: 'Rohim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chareBill: function(amount,tips,tax){
    console.log(this);
    this.salary = this.salary - amount-tips-tax;
    return this.salary;
    }
}

// console.log(normalPerson.firstName,normalPerson.lastName);

// normalPerson.chareBill(140);
// normalPerson.chareBill(2000);
// console.log(normalPerson.salary);
const heroPerson = {
    firstName: 'Hero',
    lastName: 'Bike',
    salary: 30000
}
const friendlyPerson = {
    firstName: 'Sakib',
    lastName: 'Khan',
    salary: 25000
}

// normalPerson.chareBill();
// const heroBillCharge = normalPerson.chareBill.bind(heroPerson);      **binding system**
// heroBillCharge(2000);
// heroBillCharge(3000);
// normalPerson.chareBill(2000);
// console.log(heroPerson.salary);
// console.log(normalPerson.salary);

// const friendlyChargeBill = normalPerson.chareBill.bind(friendlyPerson);
// friendlyChargeBill(3000);
// console.log(friendlyPerson.salary);

// normalPerson.chareBill.call(heroPerson,10000,100,10);         **Call using coma for next value**
// normalPerson.chareBill.call(heroPerson,5000,100,10);
// console.log(heroPerson.salary);

// normalPerson.chareBill.call(friendlyPerson,5000,100,15);
// console.log(friendlyPerson);

// normalPerson.chareBill.apply(heroPerson,[5000,100,50]); //      **Apply using array**
// console.log(heroPerson.salary);