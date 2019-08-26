function prism(long, height, width){
  this.long = long,
  this.height = height
  this.width = width,
  this.area = function (){ return this.long * this.width },
  this.volume = function () { return this.long * this.width * this. height },
  this.perimeter = function (){ return ( this.long + this.width ) * 2 }
}

module.exports = prism;


