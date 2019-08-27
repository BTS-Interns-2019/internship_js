function prism(l, w, h) {
  let prisma = {
    long: l,
    width: w,
    height: h,
    perimeter: function () {
      return this.long*2  + this.width*2
    },
    area: function () {
      return this.long * this.width
    },
    volume: function() {
      return this.area() * this.height
    }
  } 
  return prisma;
}
module.exports = prism;

// p1 = new prism(1,1,1);
// console.log(p1.perimeter());
// console.log(p1.area());
// console.log(p1.volume());

// p2 = new prism(2,1,1);
// console.log(p2.perimeter());
// console.log(p2.area());
// console.log(p2.volume());

// function prism(l, w, h) {
//   this.long = l;
//   this.width = w;
//   this.height= h;
//   this.perimeter = function () {
//     return this.long*2  + this.width*2
//   };
//   this.area = function () {
//     return this.long * this.width
//   };
//   this.volume = function() {
//     return this.area() * this.height
//   };
// }