// prism is the Prototype
function Prism(length, height, width) {
  this.length = length;
  this.height = height;
  this.width = width;

  this.perimeter = () => (2 * this.length) + (2 * this.width);
  this.area = () => this.length * this.width;
  this.volume = () => this.area() * this.height;
}

module.exports = Prism;
