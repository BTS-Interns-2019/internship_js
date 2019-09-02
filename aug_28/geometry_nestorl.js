function Figure() {
    this.base = 0,
    this.height = 0,
    this.radius = 0,
    this.vheight = 0,
    this.descriptionObj = {
        type: "",
    };
    this.mesure = {
        base: this.base,
        height: this.height,
        radius: this.radius,
        vheight: this.vheight,
    }
}

function Rectangle(b,h){
    this.type = "Rectangle"
    this.base = b;
    this.height = h;
    this.perimeter = 2 * (b + h);
    this.area = b * h;
}

function Square(l){
    this.type = "Square"
    this.base = l;
    this.height = l;
    this.perimeter = l * 4;
    this.area = l * l;
}

function Triangle(b,h){
    this.type = "Triangle"
    this.base = b;
    this.height = h;
    const hp = Math.sqrt(Math.pow(((base/2)+height),2 ));
    this.perimeter = (hp * 2) + b;
    this.area = b * h /2 ;
}

let triangulo = new Triangle(10,42);
console.log(triangulo);
