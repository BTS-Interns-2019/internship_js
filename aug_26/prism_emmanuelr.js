function Prism(long, height, width) {
  this.long = long;
  this.height = height;
  this.width = width;
  this.perimeter = () => (this.long * 2) + (this.width * 2);
  this.area = () => this.long * this.width;
  this.volume = () => this.area() * this.height;
}

module.exports = Prism;
