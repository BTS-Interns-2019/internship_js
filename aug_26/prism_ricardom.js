function prism(long, height, width){
    this.long = long;
    this.height = height;
    this.width = width;

    this.perimeter = function (){
        return (this.long + this.width) * 2;
    }

    this.area = function (){
        return this.long * this.width;
    }

    this.volume = function (){
        return this.long * this.width * this.height;
    }
    
}


module.exports = prism;