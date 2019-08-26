function prisms(long, width, height){
    this.long = long;
    this.width = width;
    this.height = height;
    this.perimetro = ()=>{return(width * 2) + (long * 2)};
    this.area = ()=>{return width  * long};
    this.volumen = ()=>{return this.area() * height};
}
let s = new prisms(2,1,1);
console.log(s);

module.exports = prisms;
