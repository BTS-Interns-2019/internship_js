function avoidingFire(){
    
arguments.foreach(function (){
    var values = Object.create(null);
    for (var i = 0; i < array.length; ++i) {
        var value = array[i];
        if (value in values) {
            return true;
        }
        console.log(values[value]);
        values[value] = true;
    }
    return false;

})
    return int
}