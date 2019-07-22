function checkPass(pass){
    var mayuscula = false;
    var minuscula = false;
    var numero = false;
    var simbolo = false; 

    var caracterRepetido = false;

    if(typeof pass !== 'string'){
        throw "ERROR: El tipo de dato insertando en password debe de ser string";
    }

    switch(true){
        case pass.length == 0 : {
            throw "ERROR: Debes de introducir un password";
            break;
        }

        case pass.length > 0 && pass.length < 6 : {
            throw "ERROR: Password muy corto";
            break;
        }

        case pass > 12 : {
            throw "ERROR: Password muy largo";
            break;
        }
    }

    for(var i=0; i<pass.length; i++){
        for(var j=0; j<pass.length; j++){
            if(i !== j){
                if(pass.charAt(i) === pass.charAt(j)){
                    caracterRepetido = true;
                }
            }
        }

    }

    if(caracterRepetido === true){
        throw "ERROR: No debes repetir los caracteres en el password.";
    }

    var a=0;
    while(a < pass.length){
        if(pass.charAt(a) >= 65 && pass.charAt(a) <= 90){
            mayuscula = true;
        }

        else if(pass.charAt(a) >= 97 && pass.charAt(a) <= 122){
            minuscula = true;
        }

        else if(pass.charAt(a) >= 48 && pass.charAt(a) <= 57){
            numero = true;
        }

        else{
            simbolo = true;
        }

        a++;
    }

    if(!(mayuscula == true && minuscula == true && numero == true && simbolo == true)){
        throw "ERROR: El password debe tener al menos una letra mayuscula, una minuscula, un numero y un simbolo";
    }

}



try{
    checkPass("MARLON TORRES96");
}
catch (err){
    console.error("PASSWORD INVALIDO " + err);
} 
