function Catch2(){
    for (var x = 0; x < 10; x++){
        console.log(x);
        try {
            if (x == 5){
                throw 'cinco';
            }
        }catch (e){
            console.log("el "+ e +" no me gusta");
            //break;
        }
    }
}

Catch2();