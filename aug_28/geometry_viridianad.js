function Figure(base, height, radius, vHeight){
    let figure = {
        base: base,
        height: height,
        radius:radius,
        vHeight:vHeight,
        descriptionObj={
            type:'',
        }
    }

    var rectangle = {
        length: 4,
        width: 4,
        isSquare: function() {
          return (this.length == this.width);
        },
        area: function() {
          return (this.length * this.width);
        },
        perimeter: function() {
          return (this.length * 2 + this.width * 2);
        }
      };




    
}
