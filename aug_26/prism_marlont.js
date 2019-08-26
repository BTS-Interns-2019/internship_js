function prism(long, width, height) {
  if(typeof long === 'undefined' || typeof width === 'undefined' || typeof height === 'undefined'){
    this.long = 0;
    this.width = 0;
    this.height = 0;
  } else {
    this.long = long;
    this.width = width;
    this.height = height;
  }
    
  this.perimeter = function(){
    return (this.long + this.width) * 2;
  }
  
  this.area = function(){
    return this.long * this.width;
  }
  
  this.volume = function() {
    return this.long * this.width * this.height;
    }
  
}
  
module.exports = prism;