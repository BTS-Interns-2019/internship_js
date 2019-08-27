function person(name, lastname){ 
  this.name = name,
  this.lastname = lastname,

  Object.defineProperty(this, 'fullname', {
    'get': function(){
      if(!this.name || !this.lastname) return undefined
      return name + ' ' + lastname
    },
    'set': function(string){
      this.name = string.split(' ')[0]
      this.lastname = string.split(' ')[1]
    },
  })
};
let persona = new person()
persona.fullname = 'Kokoriko okirokok'
console.log(persona)

module.exports = person;

  

// let erick = new person('Erick', 'Vazquez')
// erick.name = 'Israel'
// console.log(erick)
// erick.fullname = 'Israel Neri'
// // erick.lastname = 'Neri'
// console.log(erick.name)
// console.log(erick.lastname)

