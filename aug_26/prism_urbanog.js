function prism(long, height, width) {
  this.long = long;
  this.height = height;
  this.width = width;
  this.perimeter = () => {
    return this.long * 2 + this.width * 2;
  };
  this.area = () => {
    return this.width * this.long;
  };
  this.volume = () => {
    return this.area() * this.height;
  };
}

let p;
p = new prism(1, 1, 1);
console.log(p.perimeter());
console.log(p.area());
console.log(p.volume());

let p2;
p2 = new prism(2, 3, 4);
console.log(p2.perimeter()); 
//12
console.log(p2.area()); 
//8
console.log(p2.volume()); 
//24
const p3 = new prism(2, 1, 1);
console.log(p3.long);
// 2

console.log(p3.height);
// 1
console.log(p3.width);
// 1
console.log("=====");
console.log(p3.perimeter()); 
// 6
console.log(p3.area()); 
// 2
console.log(p3.volume()); 
// 2


module.exports= prism;