module.exports = prism;

function prism(b,h,l){
    this.long=b;
    this.width=l;
    this.height=h;
    this.perimeter=function(){
        let p=getPerimeter(b,h);
        return p;
    };
    this.area=function(){
        let a=getArea(b,h);
        return a;
    };
    this.volume=function(){
        let v=getVolume(b,h,l);
        return v;
    };
}
getPerimeter = function(x,y){
    return (2*x)+(2*y);
}

getArea = function(x,y){
    return x*y;
}

getVolume = function(x,y,z){
    let a=getArea(x,y);
    return a*z;
}