/*

Create a function that generates prisms
each prism should be able to show the perimeter and the area of the base and the volume

the "constructor" function receibes 3 params, long, width, and height

use `this`

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

*/

function prism(long,width,height) {
    this.long = long;
    this.width = width;
    this.height = height
    this.perimeter = function(){return (this.long*2) + (this.width*2)};
    this.area = function(){return this.long*this.width};
    this.volume = function(){ return this.long*this.width*this.height};
}
//  var p = new prisms(5,5,5);
//  console.log(p.area());

function prisms2(l,w,h) {
    let prisma2 = {
        long: l,
        width: w,
        height: h,
        perimeter: function (){
            return this.long*2 + this.width*2;
        },
        
    }
}
//  var p3 = new prisms(2,1,1);
//  console.log(p3.perimeter());
 

module.exports = prism;
 