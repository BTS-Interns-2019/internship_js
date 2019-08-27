function Person(name, lastname){ 
  this.name = name,
  this.lastname = lastname,

  Object.defineProperty(this, 'fullname', {
    'get': function(){
      if(!this.name || !this.lastname) return undefined
      return name + ' ' + lastname;
    },
    'set': function(string){
      this.name = string.split(' ')[0];
      this.lastname = string.split(' ')
                            .slice(1)
                            .join(' ');
    },
  })
};


module.exports = Person;

  


