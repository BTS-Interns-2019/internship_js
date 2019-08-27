function Person(name, lastname){
    const person = {
        name : name,
        lastname : lastname,

        get fullname (){
            return this.name + " " + this.lastname;
        },
        
        set fullname(fullname){
            fullname = fullname.split(" ");
            this.name = fullname[0];
            this.lastname = fullname[1];
        }
    }
    return person;
}

 module.exports = Person; 