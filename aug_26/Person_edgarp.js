function Person (name, lastName){
    Person = {
        name: name,
        lastName: lastName,
        get fullName () {
            return this.name + ' ' + this.lastName;
        },
        set fullName (fullName){
            const word = fullName.split(' ');
            this.name = word[0];
            this.lastName = word[1];
        }
    };
    return Person;
    
};

/*
const p = new Person ('Edgar', 'Peregrino');
console.log(p.name);
console.log(p.last_name);
console.log(p.full_name);

p.name = 'Federico';
console.log(p.name);
console.log(p.last_name);
console.log(p.full_name);
p.last_name = 'parangaricutirimicuaro';
console.log(p.name);
console.log(p.last_name);
console.log(p.full_name);
p.full_name = 'Pancho Lopez';
console.log(p.name);
console.log(p.last_name);
console.log(p.full_name);
*/

module.exports = Person;