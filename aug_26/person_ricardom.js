function Person(name, lastName){
    const person = {
        name : name,
        lastName : lastName,

        get fullName (){
            return this.name + " " + this.lastName;
        },
        
        set fullName(fullName){
            fullName = fullName.split(" ");
            this.name = fullName[0];
            this.lastName = fullName[1];
        }
    }
    return person;
}

 module.exports = Person; 