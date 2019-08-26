function prisma(long, height, width) {
  this.long = long;
  this.height = height;
  this.width = width;
  this.perimeter = () => {
    return this.long * 2 + this.width * 2;
  };
  this.area = () => {
    return this.width * this.long;
  };
  this.volumen = () => {
    return this.area() * height;
  };
}
module.exports = prisma;
/*var p = new prisma(1, 1, 1);
console.log(p.perimeter());
console.log(p.area());
console.log(p.volumen());

var p = new prisma(2, 22, 12);
console.log(p.perimeter());
console.log(p.area());
console.log(p.volumen());

var p = new prisma(2, 1, 1);
console.log(p.perimeter());
console.log(p.area());
console.log(p.volumen());*/
