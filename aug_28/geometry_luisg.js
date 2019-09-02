class Figure {
    constructor() {
        this.type;
        this.measures = {}
    }

    get descriptionObj() {
        return {
            type: this.type,
            mesures: this.measures
        }
    };
    get description() {
        let s = this.type + " of ";
        for (let v in this.measures) {
            s += v + " = " + this.measures[v];
        }
        return s;
    };
    get area() { };
    get perimeter() { };
}

class Rectangle extends Figure {
    constructor(base, height) {
        super()
        this.base = base;
        this.height = height
        this.type = "Rectangle"
        this.measures.base = this.base;
        this.measures.height = this.height;
    }
    get area() {
        return this.base * this.height;
    }
    get perimeter() {
        return this.base * 2 + this.height * 2;
    }
}

class Square extends Figure {
    constructor(base) {
        super()
        this.base = base;
        this.type = 'Square'
        this.measures.base = this.base
    }
    get area() {
        return this.base * this.base;
    }
    get perimeter() {
        return this.base * 4
    }
}

class Triangle extends Figure {
    constructor(base, height) {
        super()
        this.base = base;
        this.height = height
        this.type = "Triangle"
        this.measures.base = this.base;
        this.measures.height = this.height;
    }
    get area() {
        return (this.base * this.height) / 2;
    }
    get perimeter() {
        let c1 = this.base / 2;
        let h = Math.sqrt(c1 ** 2 + this.height ** 2);
        return h * 2 + this.base;
    }
}

class Circle extends Figure {
    constructor(radius) {
        super()
        this.radius = radius;
        this.type = 'Circle'
        this.measures.radius = this.radius
    }
    get area() {
        return Math.PI * this.radius ** 2;
    }
    get perimeter() {
        return this.base * 4
    }
}

class Cube extends Figure {
    constructor(base) {
        super()
        if (base.type !== undefined) {
            if (base.type != 'Square') {
                throw new Error("Error creating Cube: It expects an object of Type Square but got " + base.type + " instead")
            } else {
                base = base.base;
            }
        }
        //super();
        this.base = base;
        this.type = 'Cube'
        this.measures.base = this.base
    }
    get area() {
        return this.base * this.base * 6;
    }
    get perimeter() {
        return this.base * 4
    }
}

class PrismRectangle extends Figure {
    constructor(vHeight,...args) {
        super()
        switch(args.length){
            case 1:
                let fig = args[0]
                if(fig.type == 'Rectangle'){
                    this.base = fig.base;
                    this.height = fig.height;
                }else{
                    throw new Error("Error creating PrismRectangle: It expects an object of Type Rectangle but got " + fig.type + " instead")
                }
                break;
            case 2:
                    this.base = args[0];
                    this.height = args[1];
                break;
        }
       
        this.vHeight = vHeight;
        this.type = 'Prism Rectangle'
        this.measures.base = this.base
        this.measures.height = this.height
        this.measures.vHeight = this.vHeight
    }
    get area() {
        return this.base * this.height * 2 + this.base * this.vHeight * 2 + this.height * this.vHeight * 2;
    }
    get perimeter() {
        return this.base * this.height
    }
}

class PrismTriangle extends Figure {
    constructor(vHeight, ...args) {
        super();
        switch(args.length){
            case 1:
                let fig = args[0]
                if(fig.type == 'Triangle'){
                    this.base = fig.base;
                    this.height = fig.height;
                }else{
                    throw new Error("Error creating  PrismTriangle: It expects an object of Type Triangle but got " + fig.type + " instead")
                }
                break;
            case 2:
                    this.base = args[0];
                    this.height = args[1];
                break;
        }
        this.vHeight = vHeight;
        this.type = 'Prism Triangle'
        this.measures.base = this.base
        this.measures.height = this.height
        this.measures.vHeight = this.vHeight
    }
    get area() {
        let c1 = this.base / 2;
        let h = Math.sqrt(c1 ** 2 + this.height ** 2);
        return this.base * this.height + h * this.vHeight * 3

    }
    get perimeter() {
        let c1 = this.base / 2;
        let h = Math.sqrt(c1 ** 2 + this.height ** 2);
        return h * 2 + this.base;
    }
}

class Cilinder extends Figure {
    constructor(radius, vHeight) {
        super()
        if (radius.type !== undefined) {
            if (base.type != 'Circle') {
                throw new Error("Error creating Cilinder: It expects an object of Type Circle but got " + radius.type + " instead")
            } else {
                radius = radius.radius;
            }
        }
        this.radius = radius;
        this.vHeight = vHeight
        this.type = 'Cilinder'
        this.measures.radius = this.radius
        this.measures.vHeight = this.vHeight
    }
    get area() {
        return 2 * Math.PI * this.radius ** 2;
    }
    get perimeter() {
        return this.base * 4
    }
}

/*
const square = new Square(10);
console.log(square.perimeter); // 40

const cube = new Cube(10);
console.log(cube.perimeter); // 40
console.log(cube.area); // 240

console.log(cube.descriptionObj);
// {
//   type: 'Cube',
//   mesures: {
//     base: 10
//   }
// }

console.log(cube.description); // Cube of base = 10


const triangle = new Triangle(10, 11);
const fakeCube = new Cube(triangle, 20) // [error]
*/
// Error creating Cube: It expects an object of Type Square but got Triangle instead
module.exports = {Figure,Rectangle,Square,Triangle,Circle,Cube,PrismRectangle,Cilinder}