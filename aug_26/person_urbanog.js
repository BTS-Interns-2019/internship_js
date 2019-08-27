function Person(name, lastName) {
  const person = {
    name: name,
    lastName: lastName,
    get fullName() {
      return `${this.name} ${this.lastName}`;
    },
    set fullName(fullName) {
      const newFullName = fullName.split(' ');
      this.name = newFullName.shift();
      this.lastName = newFullName.join(' ');
    }
  };
  return person;
}

const p = new Person('Jose', 'Vasconselos Rosas');
console.log(p.fullName);
p.name = 'Roberto';
console.log(p.fullName);
p.fullName = 'Pedro Casas';
console.log(p.name);
console.log(p.lastName);
console.log(p.fullName);
module.exports = Person; 