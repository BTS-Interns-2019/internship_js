function prism(long, width, height) {
    this.long = long;
    this.width = width;
    this.height = height;
    
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
  
  