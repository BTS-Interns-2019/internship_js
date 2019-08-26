function  fibonacci( nth )
{
    //Se declaran tres variables: el resultado
    //el fibonaxi de 1
    //y un auxiliar
    //valores en n para poder hacer operaciones con numeros grandes
    let x=1n, y=0n, prev;
    //Mi sentencia while proporciona un valor mayor
    //+1 al esperado, asi que guardo el valor actual
    //y el previo para devolver el previo ok?
    arr=new Array(2);
    arr[0]=x;
    //while que hace el fibonaxi
    //a X se le suma el anterior, se guarda lo que tenia x
    //y Y devuelve el valor
    while (nth >= 0){
      prev = x;
      x = x + y;
      y = prev;
      //"Y" sepone al prinsipio del arreglo 
      //se saca la tercer posicion y se guardan
      //el anterior y la actual posicion 
      arr.unshift(y);
      arr.pop;
      //evitar ciclo infinito
      nth--;
    }
    //Obtener la posicion anterior dado que mi while obtiene
    //un dibonaxi mayor +1. La posicion 1 guarda el 
    //numero anterior, osea el correcto.
    nthNumberOfFibonacci = arr[1]; 
    return nthNumberOfFibonacci;
}
module.exports= fibonacci;