module.exports=Person;

function Person (n,lastname){
    this.name=n;
    this.lastName=lastname;
    Person.fullName=n+" "+lastname;
}
Person.prototype = {
    set fullName(fn){
        let div=fn.split(" ");
        this.name=div[0];
        this.lastName=div[1];
    },
    get fullName(){
        return this.name+" "+this.lastName;
    }
};