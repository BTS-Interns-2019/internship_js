function Figure (base, height, radius, vHeight){
    [this.base, this.height, this.radius, this.vHeight] = [base, height, radius, vHeight];
    this.dObj = {
        type: '',
        measure: {
            base: this.base,
            height: this.height,
            radius: this.radius,
            vHeight: this.vHeight,
        },
    };
    this.farea = 0;
    this.fperimeter = 0;
}


Object.defineProperties (Figure, {
    descriptionObj: {
        get (){
            return this.dObj;
        },
        set (type){
            this.dObj.type = type;
        },
    },
    description: {
        get (){
            switch (this.dObj.type){
                case 'rectangle':
                 return this.dObj.type +' base = ' + this.dObj.measure.base + ', height = '+ this.dObj.measure.height;
                 case 'square':
                 return this.dObj.type +' base = ' + this.dObj.measure.base;   
                 case 'triangle':
                 return this.dObj.type +' base = ' + this.dObj.measure.base + ', height = '+ this.dObj.measure.height;
                 case 'circle':
                 return this.dObj.type +' radius = '+ this.dObj.measure.radius;
                 case 'cube':
                 return this.dObj.type +' base = ' + this.dObj.measure.base;
                 case 'prismrectangle':
                 return this.dObj.type +' base = ' + this.dObj.measure.base + ' height = '+ this.dObj.measure.height + ' vHeight = '+ this.dObj.measure.vHeight;   
                 case 'prismtriangle':
                 return this.dObj.type +' base = ' + this.dObj.measure.base + ' height = '+ this.dObj.measure.height +' vHeight = '+ this.dObj.measure.vHeight;  
                 case 'cylinder':
                 return this.dObj.type +' radius = '+ this.dObj.measure.radius + ' vHeight = '+ this.dObj.measure.vHeight;
            };       
        },
    },
    area: {
        get (){
            return this.farea;
        },
        set (result){
            this.farea = result;
        },
    },
    perimeter: {
        get (){
            return this.fperimeter;
        },
        set (result){
            this.fperimeter = result;
    },
    },
});

function Rectangle (base, height){
    Figure.apply (this,[base, height]);
    this.descriptionObj.type = 'rectangle';
    this.area = (this.base * this.height);
    this.perimeter = (this.base * 2) + (this.height * 2);
}

Rectangle.prototype = Object.create(Figure);

function Square (base){
    Figure.apply (this,[base]);
    this.descriptionObj.type = 'square';
    this.area = Math.pow(this.base,2);
    this.perimeter = (this.base * 4);
}

Square.prototype = Object.create(Figure);

function Triangle (base, height){
    Figure.apply (this,[base, height]);
    this.descriptionObj.type = 'triangle';
    this.area = (this.base * this.height)/2;
    let h = Math.sqrt(Math.pow(this.base/2,2) + Math.pow(this.height, 2));
    this.perimeter = this.base + (h * 2);
}

Triangle.prototype = Object.create(Figure);

function Circle (radius){
    Figure.apply (this,[undefined, undefined, radius]);
    this.descriptionObj.type = 'circle';
    this.area = Math.PI * Math.pow(this.radius, 2) ;
    this.perimeter = Math.PI * (this.radius * 2);
}

Circle.prototype = Object.create(Figure);

function Cube (square){
    if (square.descriptionObj.type != 'square'){
        throw 'Error creating Cube: It expects an object of Type Square but got' + square.descriptionObj.type + ' instead';
    }
    Figure.apply(this,[square.base]);
    this.descriptionObj.type = 'cube';
    this.area = square.area * 6;
    this.perimeter = square.base * 12;
}

Cube.prototype = Object.create(Figure);

function PrismRectangle (rectangle, vHeight){
    if (rectangle.descriptionObj.type != 'rectangle'){
        throw 'Error creating Cube: It expects an object of Type Square but got' + rectangle.descriptionObj.type + ' instead';
    }
    Figure.apply(this,[rectangle.base, rectangle.height, undefined, vHeight]);
    this.descriptionObj.type = 'prismrectangle';
    this.area = (rectangle.area *  2) + (rectangle.base * this.vHeight * 2) + (rectangle.height * this.vHeight * 2);
    this.perimeter = (4 * rectangle.base) + (4 * rectangle.height) + (4 * this.vHeight);
}

PrismRectangle.prototype = Object.create(Figure);

function PrismTriangle (triangle, vHeight){
    if (triangle.descriptionObj.type != 'triangle'){
        throw 'Error creating Cube: It expects an object of Type Square but got' + triangle.descriptionObj.type + ' instead';
    }
    Figure.apply(this,[triangle.base, triangle.height, undefined, vHeight]);
    this.descriptionObj.type = 'prismtriangle';
    let h = Math.sqrt(Math.pow(triangle.base/2,2) + Math.pow(triangle.height, 2)); 
    this.area = (triangle.area *  2) + (h * this.vHeight * 2) + (triangle.base * this.vHeight);
    this.perimeter = (2 * triangle.base) + (4 * triangle.height) + (3 * this.vHeight);
}

PrismTriangle.prototype = Object.create(Figure);

function Cylinder (circle, vHeight){
    if (circle.descriptionObj.type != 'circle'){
        throw 'Error creating Cube: It expects an object of Type Square but got' + circle.descriptionObj.type + ' instead';
    }
    Figure.apply(this,[undefined, undefined, circle.radius, vHeight]);
    this.descriptionObj.type = 'cylinder';
    this.area = (circle.area *  2) + (2 * Math.PI * circle.radius * this.vHeight);
    this.perimeter = (2 * Math.PI * Math.pow(circle.radius,2) * this.vHeight) + (4 * Math.PI * Math.pow(circle.radius, 2));
}

Cylinder.prototype = Object.create(Figure);


/*
const rectangle = new Rectangle (10,15);
console.log(rectangle.area);
console.log(rectangle.perimeter);
console.log(rectangle.description);
console.log(rectangle.descriptionObj);

const square = new Square (20);
console.log(square.area);
console.log(square.perimeter);
console.log(square.description);
console.log(square.descriptionObj);

const triangle = new Triangle (10, 15);
console.log(triangle.area);
console.log(triangle.perimeter);
console.log(triangle.description);
console.log(triangle.descriptionObj);

const circle = new Circle (10);
console.log(circle.area);
console.log(circle.perimeter);
console.log(circle.description);
console.log(circle.descriptionObj);

const cube = new Cube (square);
console.log(cube.area);
console.log(cube.perimeter);
console.log(cube.description);
console.log(cube.descriptionObj);

const prismrectangle = new PrismRectangle (rectangle, 8);
console.log(prismrectangle.area);
console.log(prismrectangle.perimeter);
console.log(prismrectangle.description);
console.log(prismrectangle.descriptionObj);

const prismtriangle = new PrismTriangle (triangle, 6);
console.log(prismtriangle.area);
console.log(prismtriangle.perimeter);
console.log(prismtriangle.description);
console.log(prismtriangle.descriptionObj);

const cylinder = new Cylinder (circle, 7);
console.log(cylinder.area);
console.log(cylinder.perimeter);
console.log(cylinder.description);
console.log(cylinder.descriptionObj);
*/
module.exports = {
  Square,
  Rectangle,
  Triangle,
  Circle,
  Cube,
  PrismRectangle,
  PrismTriangle,
  Cylinder,
};
