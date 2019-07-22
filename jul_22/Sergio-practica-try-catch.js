//Agregando a un nuevo array elementos de otro pero sin conocer su contenido
arry = [0,,4,"choto",7];
hola = [];
    try {
        for (let i = 0; i < arry.length; i++) {
        if(arry[i]){
            throw "alto ahi indefinido;"
        }
            hola[i] = arry[i];
        }
    } catch (error) {
        console.log(error);
        return error;
        
    }

console.log(hola);


function JhonaSeLa(toda){
            let frase = "";
            let i = 0;
            let terminado = true;
            while ( terminado ){
                
                try {
                    if(typeof toda[i] != String){
                    throw "basura"
                    
                }
                    frase += toda[i]+" ";
                } catch (error) {
                    console.log("esta resibiendo infinito");
                    
                }
                
                if(i == toda.length){
                    terminado = false;
                }
                i++;
            }
            return frase;
        }

console.log(JhonaSeLa(["el","Jhona","sela","come",7]));
