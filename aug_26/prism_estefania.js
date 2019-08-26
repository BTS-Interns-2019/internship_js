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
  return prisma
}
module.exports = prism;

// p = new prism(1,1,1);
// console.log(p.perimeter());
// console.log(p.area());
// console.log(p.volume());

// p2 = new prism(2,1,1);
// console.log(p2.perimeter());
// console.log(p2.area());
// console.log(p2.volume());