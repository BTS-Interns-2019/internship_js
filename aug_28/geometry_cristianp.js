function Figure(base, height, radius, vHeight) {
    this.base = base;
    this.height = height;
    this.radius = radius;
    this.vHeight = vHeight;
    this.descriptObj ={
        type:"",
        measures:{
            base:this.base,
            height:this.height,
            radius:this.radius,
            vHeight:this.vHeight,
        }
    };
    this.Farea = 0;
    this.Fperimeter = 0;
};

Object.defineProperties(Figure,{
    descriptionObj:{
        get(){
            return this.descriptObj;
        },
        set(type){
            this.descriptObj.type = type;
        }
    },
    description:{
        get(){
            switch (this.descriptObj.type){
                case 'rectangle':
                 return this.descriptObj.type +' base = ' + this.descriptObj.measures.base + ', height = '+ this.descriptObj.measures.height;
                 case 'square':
                 return this.descriptObj.type +' base = ' + this.descriptObj.measures.base;   
                 case 'triangle':
                 return this.descriptObj.type +' base = ' + this.descriptObj.measures.base + ', height = '+ this.descriptObj.measures.height;
                 case 'circle':
                 return this.descriptObj.type +' radius = '+ this.descriptObj.measures.radius;
                 case 'cube':
                 return this.descriptObj.type +' base = ' + this.descriptObj.measures.base;
                 case 'prismrectangle':
                 return this.descriptObj.type +' base = ' + this.descriptObj.measures.base + ', height = '+ this.descriptObj.measures.height + ', vHeight = '+ this.descriptObj.measures.vHeight;   
                 case 'prismtriangle':
                 return this.descriptObj.type +' base = ' + this.descriptObj.measures.base + ' height = '+ this.descriptObj.measures.height +' vHeight = '+ this.descriptObj.measures.vHeight;  
                 case 'cylinder':
                 return this.descriptObj.type +' radius = '+ this.descriptObj.measures.radius + ' vHeight = '+ this.descriptObj.measures.vHeight;
            };       
        }
    },
    area:{
        get(){
            return this.Farea;
        },
        set(resultado){
            this.Farea = resultado;
        }
    },
    perimeter:{
        get(){
            return this.Fperimeter;
        },
        set(resultado){
            this.Fperimeter = resultado;
        }
    }
});


function Square(side){
    Figure.apply(this,[side]);
    this.perimeter = this.descriptionObj.measures.base * 4;
    this.area = this.descriptObj.measures.base * this.descriptObj.measures.base;
    this.descriptionObj = "square";
}
Square.prototype = Object.create(Figure);

function Rectangle(sideW, sideH){
    Figure.apply(this,[sideW,sideH]);
    this.area = this.descriptionObj.measures.base * this.descriptionObj.measures.height;
    this.perimeter = (this.descriptionObj.measures.base * 2) + (this.descriptionObj.measures.height * 2);
    this.descriptionObj = "rectangle";
}
Rectangle.prototype = Object.create(Figure);

function Triangle(base, hei){
    Figure.apply(this,[base,hei]);
    this.descriptionObj = "triangle";
    this.area = (this.base * this.height) / 2;
    let hipo = Math.sqrt( (this.base/2) ** 2 + (this.height ** 2) );
    this.perimeter = this.base + (hipo * 2);
}
Triangle.prototype = Object.create(Figure);

function Circle(radius){
    Figure.apply (this,[undefined, undefined, radius]);
    this.descriptionObj = 'circle';
    this.area = Math.PI * Math.pow(this.radius, 2) ;
    this.perimeter = Math.PI * (this.radius * 2);
}
Circle.prototype = Object.create(Figure);

function Cube(square){
    if(square.descriptObj.type !== "square"){
        throw "Error creating Cube " +
            "It expects an object of Type square 2d object type but got " + 
                square.descriptionObj.type +" instead";
    }
    Figure.apply(this, [square.base]);
    this.descriptionObj = "cube";
    this.area = square.area * 6;
    this.perimeter = square.base * 12;
}
Cube.prototype = Object.create(Figure);

function PrismRectangle (rectangle, vHeight){
    if (rectangle.descriptionObj.type != 'rectangle'){
        throw 'Error creating Prism Rectangle: It expects an object of Type rectangle but got'
        + rectangle.descriptionObj.type + ' instead';
    }
    Figure.apply(this,[rectangle.base, rectangle.height, undefined, vHeight]);
    this.descriptionObj.type = 'prismrectangle';
    this.area = (rectangle.area *  2) +
            (rectangle.base * this.vHeight * 2) +
            (rectangle.height * this.vHeight * 2);
    this.perimeter = (4 * rectangle.base) +
            (4 * rectangle.height) +
            (4 * this.vHeight);
}
PrismRectangle.prototype = Object.create(Figure);

function PrismTriangle (triangle, vHeight){
    if (triangle.descriptionObj.type != 'triangle'){
        throw 'Error creating Prism Triangle: It expects an object of Type triangle but got' +
        triangle.descriptionObj.type + ' instead';
    }
    Figure.apply(this,[triangle.base, triangle.height, undefined, vHeight]);
    this.descriptionObj.type = 'prismtriangle';
    let h = Math.sqrt( ( (triangle.base/2) ** 2) + (triangle.height ** 2)); 
    this.area = (triangle.area *  2) +
            (h * this.vHeight * 2) +
            (triangle.base * this.vHeight);
    this.perimeter = (2 * triangle.base) +
            (4 * triangle.height) +
            (3 * this.vHeight);
}

PrismTriangle.prototype = Object.create(Figure);

function Cylinder(circle, vHeight){
    if (circle.descriptionObj.type != 'circle'){
        throw 'Error creating Cube: It expects an object of Type Square but got' + circle.descriptionObj.type + ' instead';
    }
    Figure.apply(this,[undefined, undefined, circle.radius, vHeight]);
    this.descriptionObj.type = 'cylinder';
    this.area = (circle.area *  2) + (2 * Math.PI * circle.radius * this.vHeight);
    this.perimeter = ( 2 * Math.PI * (circle.radius ** 2) * this.vHeight) +
                (4 * Math.PI * (circle.radius ** 2) );
}
Cylinder.prototype = Object.create(Figure);

    // const circle = new Circle(12);
    // const cy = new Cylinder(circle,5);
    // console.log(cy.description);
    // console.log(cy.area);
    // console.log(cy.perimeter);
    // console.log(cy.perimeter);
    // const cuadrado = new Square(10);
    // const cubo = new Cube(cuadrado);
    // console.log(cubo.area);
    // console.log(cubo.perimeter);
    // console.log(cubo.description)
    // console.log(cubo.description);
    // console.log(cubo.descriptionObj);
    const triangle = new Triangle(5,5);
    const ptriangle = new PrismTriangle(triangle, 2);
    console.log(ptriangle.area);
    console.log(ptriangle.perimeter);
    console.log(ptriangle.description);
    // console.log(triangle.perimeter);
    // console.log(triangle.area);
    // console.log(triangle.description);
    // const rectangle = new Rectangle(10,5);
    // const prectangle = new PrismRectangle(rectangle, 8)
    // console.log(prectangle.area);
    // console.log(prectangle.perimeter);
    // console.log(prectangle.description);
//console.log(JSON.stringify(rectangle.descriptionObj,null));

module.exports = {Square, Rectangle, Triangle, Circle, Cube, PrismRectangle, PrismTriangle, Cylinder};