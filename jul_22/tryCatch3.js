function Catch3(){
    var y = 0;
    while (y < 20){
        try{
            if ( (y == 5) || (y == 10) || (y == 15) ){
                throw 'son multiplos de 5';
            }
        }catch (error){
            console.log(error);
        }finally {
            console.log('tarea completada con try');
        }
       y++; 
    }
}

Catch3();