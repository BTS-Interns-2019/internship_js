function Person(fn,ln){
    this.name = fn;
    this.lastName = ln;
    Object.defineProperty(this, 'fullName', {
        get: function() {
            return `${this.name} ${this.lastName}`
        },
        set: function(value) {
            const parts = value.trim().replace(/ {2,}/g," ").split(" ");
            this.name = parts[0];
            this.lastName = parts[1];
        }
    });
};
// Person.prototype = {
//     get fullName() {
//         return `${this.name} ${this.lastName}`
//     },

//     set fullName(value) {
//         const parts = value.trim().replace(/ {2,}/g," ").split(" ");
//         this.name = parts[0];
//         this.lastName = parts[1];
//     }
// }
// let persona1 = new Person("nestor", "lira");
// console.log(persona1.fullName);
// persona1.name = "rabbin"
// console.log(persona1.fullName);
// console.log(persona1.name);
// persona1.lastName = "campos";
// console.log(persona1.fullName);
module.exports = Person;