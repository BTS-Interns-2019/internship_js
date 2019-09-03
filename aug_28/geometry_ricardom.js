

function Figure (base, height, radius, vHeight){

    this.base = base;
    this.height = height;
    this.radius = radius;
    this.vHeight = vHeight;

    this.descriptionObj = {
        type : "",
        measures:{
            base: this.base,
            height: this.height,
            radius: this.radius,
            vheight: this.vheight
        }
    }
    this.figureArea=0;
    this.figurePerimeter=0;
}



p = new Figure();

console.log(p.descriptionObj)