function Person(firstName, lastName){
    Person = {
        name: firstName,
        lastName: lastName,
        
        get fullName(){
           fullName = this.name + ' ' + this.lastName;
           return fullName;
        },
        set fullName(fullName){
            temp = fullName.split(' ');
            Person.name = temp[0];
            Person.lastName = temp[1]
        }

    }
    
    return Person;
}



// const p = new Person('Juan', 'Perez');
// console.log(p.fullName);

// p.name = 'Pancho';
// console.log(p.fullName);

// p.fullName = "John Smith";
// console.log(p.name);
// console.log(p.lastName);



module.exports = Person;
