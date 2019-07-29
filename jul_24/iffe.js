function outside(x){
    function inside(y){
        return x+y;
    }
}

var fn_inside = outside(5);
var resutl = fn_inside(3);
console.log(result);