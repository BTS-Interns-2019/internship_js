function Person(first_name, last_name) {
    let persona = {
    name: first_name,
    lastName: last_name,
    get fullName () {
        return this.name + ' ' + this.lastName
    },
    set fullName (value) {
        let newFullName = value.split(' ');
        this.name = newFullName[0];
        this.lastName = newFullName[1];
      }
  }
  return persona
}


module.exports = Person;