function Person(name, lastName){
  if(typeof name === 'undefined'){
    name = ' ';
    console.log('no name');
  }
    
  if(typeof lastName === 'undefined'){
    lastName = ' ';
    console.log('no last name');
  }
    

  let person = {
    name: name,
    lastName: lastName,
    get fullName () {
      return this.name + ' ' + this.lastName;  
    },
    set fullName (fullName){
      let separate = fullName.split(' ');
      typeof separate[0] === 'undefined' ? this.name = ' ' : this.name = separate[0];
      typeof separate[1] === 'undefined' ? this.lastName = ' ' : this.lastName = separate[1];
    }
  }
  return person;
}

module.exports = Person;