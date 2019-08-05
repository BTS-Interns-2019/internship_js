function queenProblem(entero, arr) 
{
	//definimos filas y columnas
	 iMax = entero;  
	 jMax = entero;
	 cantidad_reinas = 0;
	//creamos el array 
	 f = new Array();

	// 1. primero llenamos el array con ceros.
	for (i=0;i<iMax;i++) {
		f[i]=new Array();
			for (j=0;j<jMax;j++) {
                  f[i][j]=0;
	 		}
    }
    pos1 = arr[0];
    pos2 = arr[1];
    f[pos1][pos2]=1;
    ponerte2(pos1,pos2);
    function ponerte2(pos1, pos2){
        for(y = (pos1+1);y<iMax;y++){
            f[y][pos2] = 2;
            f[y][y]=2;
        }
        for(y = (pos1-1);y>=0;y--){
            f[y][pos2] = 2;
            f[y][y]=2
        }
        for(x=(pos2+1); x<jMax;x++){
            f[pos1][x]=2;
            f[x][x]=2;
        }
        for(x=(pos2-1); x>=0;x--){
            f[pos1][x]=2;
            f[x][x]=2;
        }
        //for(x=()){        }
    }
    console.log(/*JSON.stringify(*/f/*,null)*/);
    return f;
}
console.log(queenProblem (5, [3,2]));

	//2. recorro el array para incluir las reinas
	for (i=0;i<iMax;i++) {
			for (j=0;j<jMax;j++) {
				//si encuentra un cero, es por que hay espacio para una reina
				 if (f[i][j] == 0) {
				 	espaciosreina();
				 }
	 		}
    }/*
	// 3. mostramos el array
	for (i=0;i<iMax;i++) {
			for (j=0;j<jMax;j++) {
	  			document.write("[<span class='"+f[i][j]+"'>"+f[i][j]+"</span>]");
	 		}
	 		//hacemos un salto de línea para que se vea como una matriz
	 		document.writeln("<br>");
	}
    //*/
	function espaciosreina(){				
		//hago ciclos para llenar los 4 cruces con el número 2 (restricciones)
	   	for(rc=0;rc<jMax;rc++){
	   		//llena filas
	   		f[i][rc] = 2;
	   		//lena columnas
	   		f[rc][j] = 2;
		}
		//cruz derecha abajo
		df = i;
		dc = j;
		while(df<(iMax-1) && dc<(jMax-1)){
			df++;
			dc++;
			f[df][dc] = 2;
		}
		//cruz izquierda abajo
		df = i;
		dc = j;
		while(df<(iMax-1) && dc>0){
			df++;
			dc--;
			f[df][dc] = 2;
		}
		//cruz derecha arriba
		df = i;
		dc = j;
		while(df>0 && dc<(jMax-1)){
			df--;
			dc++;
			f[df][dc] = 2;
		}
		//cruz izquierda arriba
		df = i;
		dc = j;
		while(df>0 && dc>0){
			df--;
			dc--;
			f[df][dc] = 2;
		}
		//finalmente vuelvo e indico como 1 la reina y sumo cantidad reinas
		f[i][j] = 1;
		cantidad_reinas++;
	}	
		//le ponemos color para evitar dolor de cabeza
		/*$(".0").css("background-color", "green");
		$(".1").css("background-color", "red");
		$(".2").css("background-color", "yellow");
//}//*/