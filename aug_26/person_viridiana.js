function Person(name, lastName) {
  let person = {
    name: name,
    lastName: lastName,
    get fullName() {
      return this.name + " " + this.lastName;
    },
    set fullName(fullName){
        let result= fullName.split(' ');
        this.name=result[0];
        this.lastName=result[1]
    }
  };
  return person;
}


module.exports=Person;
