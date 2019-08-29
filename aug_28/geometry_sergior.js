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

function _2d() {

}
function _3d(){

}