<<<<<<< HEAD
=======
//Codigo que funciona solo en chrome para tenr interaccion con el usuario
>>>>>>> cd873bdaaf443ab2debd2d4866271056b157d528
try{
    var nombre = prompt("Dame tu nombre");
    alert("Hola " + nombre);
    //var t;
    var edad;
    do
    {
        var t = prompt("Presiona 1 para ingresar tu edad \n 2 para cambiar de nombre \n 3 para tabla de multiplicar \n 4 Para salir del menu");
        switch(t)
        {
            case "1":
<<<<<<< HEAD
                var v = prompt("Ingresa tu edad");
                alert("Edad añadida");
                edad = v;    
=======
                var v = parseInt( prompt("Ingresa tu edad") );
                if(!isNaN(v)){
                    alert("Edad " + v + " añadida");
                    edad = v;    
                }else{
                    throw "Caracter invalido";
                }
>>>>>>> cd873bdaaf443ab2debd2d4866271056b157d528
                break;
            case "2":
                var n = prompt("Nuevo nombre");
                if(typeof n == "string")
                {
                    alert("Hola " + n)
                    nombre = n;
                }
                else
                {
                    throw new error("Ingresarte un caracter invalido");
                } break;
            case "3":
<<<<<<< HEAD
                var m = prompt("Dame un nuero para mostrar su tabla de multiplicar");
                if(typeof m == "number")
                {
                    var e;
=======
                var m = parseInt( prompt("Dame un nuero para mostrar su tabla de multiplicar") );
                if(!isNaN(m))
                {
                    var e ="";
>>>>>>> cd873bdaaf443ab2debd2d4866271056b157d528
                    for(var i=1;i<=10;i++)
                    {
                        e += m + " * " + i + " = " + (m*i) + "\n"
                    }
                    alert(e);
                }else{
                    throw "Caracter invalido"
                }
                break;
            case "4":break;
            default:alert("Ingresa opcion correcta");break;
        }
    }while(t != 4)
    
}catch(e){
<<<<<<< HEAD
    alert(e.message);
}
finally{
    alert("Gracias por su visita");
}
=======
    alert(e);
}
finally{
    alert("Gracias por su visita");
}
>>>>>>> cd873bdaaf443ab2debd2d4866271056b157d528
