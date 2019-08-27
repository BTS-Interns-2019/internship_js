function Person(name, lastName) {
  const per = {
    'name' : name,
    'lastName' : lastName,
    get fullName() {
      return this.name+' '+this.lastName;
    },
    set fullName(full) {
      this.lastName = full.split(' ');
      this.name = this.lastName.splice(0, this.lastName.length - 1 > 0 || 1).join('');
      this.lastName = this.lastName.join(' ');
    },
  };
  return per;
}
module.exports = Person;
