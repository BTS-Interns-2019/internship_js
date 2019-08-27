function Person(fN, lN) {
  let person = {
    firstName: fN,
    lastName: lN,
    get fullName() {
      return this.firstName + " " + this.lastName
    },
    set fullName(name) {
      var words = name.split(' ');
      this.firstName = words[0] || '';
      this.lastName = words[1] || '';
    }
  }
  return person;
}
module.exports = Person;