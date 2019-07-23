/*# Tarea 22 jul
Estructuras de control y definición de variables

crear archivo `tarea_<nombre>.js` en su propia branch con el siguiente formato
*/

// 3 break
for(let i=0;i<10;i++){
    console.log(i +" break");
    break;
   }
   do{
       console.log('break');
       break;
   }while(true);
   while(true){
       console.log("break");
       break;
   }
   // 3 continue
   for(let i=0;i<10;i++){
       if(i!=8){
           continue;
       }
       console.log(i +" continue");
      }
      rep = true;
      do{
          if(rep){
           rep=false;
           console.log('continue');   
           continue;}
      }while(false);
      
      while(!rep){
          if(!rep){
              console.log('continue');
              rep=true;
          }
      }
   // 3 if else
   if(15>=18){
       console.log("Si")
   }else{
       console.log("No");
   }
   if("A"=="A"){
       console.log("SÍ");
   }else{
       console.log("No")
   }
   if(true){
       console.log("if");
   }else{
       console.log("else");
   }
   // 3 switch
   switch("a"){
       case "a":
       console.log("case A");
       break;
       case "e":
       console.log("E");
       break;
       case "i":
       console.log("I");
       break;
   }
   switch(2){
       case 1:
       console.log("case 1");
       break;
       case 2:
       console.log(" case 2");
       break;
       case 3:
       console.log("case 3");
       break;
   }
   switch("pez"){
       case "gato":
       console.log("case gato");
       break;
       case "perro":
       console.log("case perro");
       break;
       default:
       console.log("case default");
       break;
   }
   // 3 try...cathc (2 throw)
   function restar(n1,n2){
       if (isNaN(n1) || isNaN(n2)) {
           throw "Los parametros deben ser numeros!";
         }else{
             return n1-n2;
         }
   }
   try{
       console.log(restar("frfrefr",null));
   }
   catch(e){
    console.log(e);
   }
   function getPos(arr,pos){
       if(pos>=arr.length){
           throw "Fuera del limite";
       }else{
           return arr[pos];
       }
   }
   try{
       console.log(getPos([3,4,2],5));
   }catch(e){
       console.log(e);
   }
   try{
       for(;false;){
           k=5;
       }
       console.log(k);
   }catch(e){
       console.log("Error");
   }
   /* ... your code here ... */
   // 3 let
   let x=0;
   console.log(x);
   let f5=5;
   console.log(f5);
   let variable_local=3;
   console.log(variable_local);
   // 3 const
   const pi = 3.1416;
   console.log(pi);
   const phi = 3.618;
   console.log(phi);
   const e = 2.18;
   console.log(2.18);
   // 3 function
   function funcion(){
       console.log("funcion");
   }
   funcion();
   function sumar(p1,p2){
       return p1+p2;
   }
   console.log(sumar(3,9));
   function saludo(nombre){
      console.log("Hola "+nombre);  
   }
   saludo("tu");
   // 3 do while
   do{
       console.log('do while 1')
   }
   while(false);
   do{
       x=1
       console.log('do while 2')
       x++
   }
   while(x<0);
   do{
       n="a";
       console.log('do while 3')
       n+="a";
   }
   while(n.length<0);
   // 3 for
   let aux = [2,5,7,8,9,0];
   for(let i=0;i<10;i++)if(i==5)console.log("for 1");
   for(let i=0;i<aux.length;i++){aux[5]+=aux[i];}console.log(aux[5]);
   for(let i=10;i>0;i--)if(i==2)console.log("for 3");
   // 3 for in
   for(let v in aux){
       if(v==3){
           console.log("for in 1");
       }
   }
   for(let v in aux){
       if(v==3){
           console.log(aux[v]);
       }
   }
   for(let v in aux){
       if(v==0){
           console.log("for in 3");
       }
   }
   // 3 for of
   for(let v of aux){
       if(v==3){
           console.log("for in 1");
       }
   }
   for(let v of aux){
       if(v==3){
           console.log(aux[v]);
       }
   }
   for(let v of aux){
       if(v==0){
           console.log("for in 3");
       }
   }
   // 3 while
   let i = 0;
   while(i<aux.length){
       if(i==4){
           console.log("while 1");
       }
       i++;
   }
   i=0;suma=0;
   while(i<aux.length){
       suma+=aux[i];
       i++;
   }
   console.log(suma);
   i=aux.length;
   while(i>0){
       if(aux[i]>=10)
       console.log("while 3");
    i--;
   }