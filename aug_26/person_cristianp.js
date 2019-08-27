function Person(name, lastName){
    const person={
        name: name,
        lastName: lastName,
        get fullName(){
            return this.name + " " + this.lastName;
        },
        set fullName(name){
            let separ = name.split(" ");
            this.name = separ[0];
            this.lastName = separ[1];
        }
    }
    return person;
}
/*
const p = new Person('Juan', 'Perez');
console.log(p.name);
console.log(p.fullName);
p.name = "algo";
console.log(p.fullName);
p.lastName = "smith";
console.log(p.fullName);
p.fullName ="cristian plascencia";
console.log(p.fullName);*/
module.exports = Person;