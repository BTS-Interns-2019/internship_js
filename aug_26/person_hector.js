// Person prototype
function Person(name, lastName) {
  const person = {
    name,
    lastName,
    get fullName() {
      return `${this.name} ${this.lastName}`;
    },
    set fullName(newName) {
      if (newName.split(' ').length > 1) {
        const nameArr = newName.split(' ');
        [this.name, this.lastName] = [nameArr[0], nameArr.slice(1).join(' ')];
      } else {
        this.name = newName;
      }
    },
  };

  return person;
}

module.exports = Person;
