function prism(long,width,height){
 this.width = width;
 this.height = height;
 this.long = long;
 this.perimeter =
 function(){
     return width*2+long*2;
 };
 this.area = 
 function(){
     return width*long;
 };
 this.volume=
 function (){
     return width*height*long;
 }
}

/*p = new prism(1,1,1) 
console.log(p.long)
console.log(p.height)
console.log(p.width);
console.log(p.perimeter());
console.log(p.area());
console.log(p.volume())

p3 = new prism(2,1,1) 
console.log(p3.long)
console.log(p3.height)
console.log(p3.width);
console.log(p3.perimeter());
console.log(p3.area());
console.log(p3.volume())
*/
module.exports = prism;