/*Create a function that generates prisms
each prism should be able to show the perimeter and the area of the base and the volume

the "constructor" function receibes 3 params, long, width, and height

use `this`
*/

function prism(long, width, height){
    this.long=long;
    this.width=width;
    this.height=height;

this.perimeter = function(){
    return (this.width + this.height)*2
}
this.volume = function(){
    return this.long * this.width * this.height
}
this.area = function(){
    return this.width * height
}

}


p = new prism(1,1,1);
p.long //1
p.height //1
p.width // 1

p.perimeter() // 4
p.area() // 1
p.volume() // 1

p3 = new prism(2,1,1);
p3.long //2
p3.height //1
p3.width // 1

p3.perimeter() // 6
p3.area() // 2
p3.volume() // 2

module.exports=prism;