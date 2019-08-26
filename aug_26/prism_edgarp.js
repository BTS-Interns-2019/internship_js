function prisms (long, height, width) {
    [this.long, this.height, this.width] = [long, height, width];

        this.perimeter = () => {
        return this.long*2 + this.height*2;
        }
        this.area = () => {
            return this.long * this.height;
            }
        this.volume = () => {
            return this.area() * this.width;
        }
}
/*
let p = new prisms (2,1,1);
console.log(p.perimeter());
console.log(p.area());
console.log(p.volume());*/

module.exports = prisms;