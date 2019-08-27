function Person(name, lastName) {
  const person = {
    name: name,
    lastName: lastName,
    get fullName() {
      return `${this.name} ${this.lastName}`;
    },
    set fullName(fullName) {
      const newFullName = fullName.split(' ');
      this.name = newFullName[0];
      this.lastName = newFullName[1];
    }
  };
  return person;
}

const p = new Person('Jose', 'Vasconselos');
console.log(p.fullName);
p.name = 'Roberto';
console.log(p.fullName);
p.fullName = 'Pedro Casas';
console.log(p.name);
console.log(p.lastName);

module.exports = Person; 