module.exports={Rectangle, Square, Triangle, Circle, Cube, PrismRectangle, PrismTriangle, Cilinder};

function Figure2D(){
    Object.defineProperties(this,{
        "area":{
            get: function(){
                return this.x*this.y;
            },
            configurable: true
        },
        "perimeter":{
            get: function(){
                return (this.x+this.y)*2;
            },
            configurable:true
        },
        "descriptionObj":{
            get: function(){
                let desc={
                    type: this.type,
                    measures: {
                        base:this.x,
                        height:this.y
                    }
                }
                return desc;
            },
            configurable:true
        },
        "description":{
            get: function(){
                return this.type+" of base = "+this.x+" and height = "+this.y;
            },
            configurable:true
        }
    })
}
Object.defineProperties(Figure2D.prototype,{
    "x":{
        get: function(){
            return this._x;
        },
        set: function(width){
            this._x=width;
        }
    },
    "y":{
        get: function(){
            return this._y;
        },
        set: function(height){
            this._y=height;
        }
    },
    "type":{
        get: function(){
            return this._type;
        },
        set: function(t){
            this._type=t;
        }
    }
})
function Figure3D(){
    Object.defineProperties(this,{
        "area":{
            get: function(){
                return ((this.x*this.y)+(this.x*this.z)+(this.y*this.z))*2;
            },
            configurable: true
        },
        "perimeter":{
            get: function(){
                return (this.x+this.y+this.z)*this.sides;
            },
            configurable:true
        },
        "descriptionObj":{
            get: function(){
                let desc={
                    type: this.type,
                    measures: {
                        base:this.x,
                        height:this.y,
                        width:this.z
                    }
                }
                return desc;
            },
            configurable:true
        },
        "description":{
            get: function(){
                return this.type+" of base = "+this.x+", height = "+this.y+" and width = "+this.z;
            },
            configurable:true
        }
    })
}
Object.defineProperties(Figure3D.prototype,{
    "x":{
        get: function(){
            return this._x;
        },
        set: function(width){
            this._x=width;
        }
    },
    "y":{
        get: function(){
            return this._y;
        },
        set: function(height){
            this._y=height;
        }
    },
    "z":{
        get: function(){
            return this._z;
        },
        set: function(volume){
            this._z=volume;
        }
    },
    "sides":{
        get: function(){
            return this._sides;
        },
        set: function(s){
            this._sides=s;
        }
    },
    "type":{
        get: function(){
            return this._type;
        },
        set: function(t){
            this._type=t;
        }
    }
})

function Rectangle(base,height){
    Figure2D.call(this);
    this.type='Rectangle';
    this.x=base;
    this.y=height;
}
function Square(base){
    Figure2D.call(this);
    this.area=Figure2D.area;
    this.type='Square';
    this.x=base;
    this.y=base;
    Object.defineProperties(this,{
        "descriptionObj":{
            get: function(){
                let desc={
                    type: this.type,
                    measures: {
                        base:this.x
                    }
                }
                return desc;
            }
        },
        "description":{
            get: function(){
                return this.type+" of base = "+this.x;
            }
        }
    })
}
function Triangle(base,height){
    Figure2D.call(this);
    this.type='Triangle';
    this.x=base;
    this.y=height;
    Object.defineProperties(this,{
        "area":{
            get: function(){
                return (this.x*this.y)/2;
            }
        },
        "perimeter":{
            get: function(){
                return Math.floor(Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2)))+this.x+this.y;
            }
        }
    })
}
function Circle(radius){
    Figure2D.call(this);
    this.type='Circle';
    this.x=radius;
    Object.defineProperties(this,{
        "area":{
            get: function(){
                return Math.floor(Math.PI*Math.pow(this.x,2));
            }
        },
        "perimeter":{
            get: function(){
                return Math.floor(2*Math.PI*this.x);
            }
        },
        "descriptionObj":{
            get: function(){
                let desc={
                    type: this.type,
                    measures: {
                        radius:this.x
                    }
                }
                return desc;
            }
        },
        "description":{
            get: function(){
                return this.type+" of radius = "+this.x;
            }
        }
    })
}
function Cube(base){
    Figure3D.call(this);
    this.type='Cube';
    this.sides=4;
    this.x=base;
    this.y=base;
    this.z=base;
    Object.defineProperties(this,{
        "descriptionObj":{
            get: function(){
                let desc={
                    type: this.type,
                    measures: {
                        base:this.x
                    }
                }
                return desc;
            }
        },
        "description":{
            get: function(){
                return this.type+" of base = "+this.x;
            }
        }
    })
}
function PrismRectangle(object2d,width){
    Figure3D.call(this);
    this.type='Prism Rectangle';
    this.sides=4;
    this.x=object2d.x;
    this.y=object2d.y;
    this.z=width;
}
function PrismTriangle(object2d,width){
    Figure3D.call(this);
    this.type='Prism Triangle';
    this.sides=3;
    this.x=object2d.x;
    this.y=object2d.y;
    this.z=width;
    Object.defineProperties(this,{
        "area":{
            get: function(){
                let f=Math.floor(Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2)));
                return (this.x*this.y)+(this.x*this.z)+(this.y*this.z)+(f*this.z);
            }
        },
        "perimeter":{
            get: function(){
                return (Math.floor(Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2)))+this.x+this.y)*2+(this.z*this.sides);
            }
        }
    })
}
function Cilinder(object2d,width){
    Figure3D.call(this);
    this.type='Cylinder';
    this.x=object2d.x;
    this.z=width;
    Object.defineProperties(this,{
        "area":{
            get: function(){
                let faces=Math.floor((Math.PI*Math.pow(this.x,2))*2);
                let surface=Math.floor((Math.PI*2)*(this.x*this.z));
                return faces+surface;
            }
        },
        "perimeter":{
            get: function(){
                return ((this.x*2)+this.z)*2;
            }
        },
        "descriptionObj":{
            get: function(){
                let desc={
                    type: this.type,
                    measures: {
                        radius:this.x,
                        width:this.z
                    }
                }
                return desc;
            }
        },
        "description":{
            get: function(){
                return this.type+" of radius = "+this.x+" and width = "+this.z;
            }
        }
    })
}

/*const square=new Square(10);
console.log(square.x);
console.log(square.y);
console.log(square);
console.log(square.area);
console.log(square);*/
/*const triangle = new Triangle(6,4);
console.log(triangle.x);
console.log(triangle.y);
console.log(triangle);
console.log(triangle.area);*/
const triangle = new Triangle(10, 11);
const fakeCube = new Cube(triangle);
console.log(fakeCube);