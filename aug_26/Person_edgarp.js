function Person (name, lastName){
    Person = {
        name: name,
        lastName: lastName,
        get fullName () {
            return this.name + ' ' + this.lastName;
        },
        set fullName (fullName){
            const word = fullName.split(' ');
            this.name = word.shift();
            this.lastName = word.join(' ');
        }
    };
    return Person;
    
};

/*
const p = new Person ('Edgar', 'Peregrino');
console.log(p.name);
console.log(p.lastName);
console.log(p.fullName);

p.name = 'Federico';
console.log(p.name);
console.log(p.lastName);
console.log(p.fullName);
p.lastName = 'parangaricutirimicuaro';
console.log(p.name);
console.log(p.lastName);
console.log(p.fullName);
p.fullName = 'Pancho Lopez Lara';
console.log(p.name);
console.log(p.lastName);
console.log(p.fullName);
*/

module.exports = Person;