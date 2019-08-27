function Person(name, lastName) {
    this.name = name,
    this.lastName = lastName;
}
Person.prototype = {
    get fullName(){
        return this.name + " " + this.lastName;
    },
    set fullName(fullName){
        let split = fullName.split(' ');
        this.name = split.shift();
        this.lastName = split.join(' ')
    }
}


module.exports = Person,Person.prototype;