function Person(name, lastName) {
  const per = {
    name,
    lastName,
    get fullName() {
      return `${this.name} ${this.lastName}`;
    },
    set fullName(full) {
      const nameArr = full.split(' ');
      this.name = nameArr.shift();
      this.lastName = nameArr.join(' ');
    },
  };
  return per;
}
module.exports = Person;
