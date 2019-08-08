function add(num1, num2) {
    // el numero mas pequeño sera el num2
    let temp = "";
    if(num2.length > num1.length){
        temp = num2;
        num2 = num1;
        num1 = temp;
    }

    num1 = num1.split('');
    let emparejar = [];
    num2 = num2.split('');
    let res = [];
    // llenamos emarejar con los mismos valores de num1 que es la cifra mas grande
    // al momento que llenamos res con l0 en la misma proporcion del tamaño de num1
    for (let i = 0; i < num1.length; i++) {
        emparejar[i] = num1[i];
        res[i] = 0;
    }
    // cambiamos a valores numbero cada valor en string en emoarejar
    for (let i = emparejar.length-1,j = 0; i >= 0; i--,j++) {
        if(num2[num2.length-j-1] == undefined){emparejar[i] = 0
        }else{
            emparejar[i] = parseInt(num2[num2.length-j-1]);
        }
    }
temp = "";
let aux = 0;
    // aux sera la cantidad extra que fuera resultante de la suma es decir al momento de sumar 9 +1  aux = "1"
    for (let k = num1.length-1; k >= 0; k--) {
        temp = "";
        num1[k] = parseInt(num1[k]);
        emparejar[k] = parseInt(emparejar[k]);
        
        if((num1[k] + emparejar[k]) > 9){
            temp = num1[k] + emparejar[k];
            temp =  temp.toString();
            // if(temp.length >)
            res[k] = temp[temp.length-1];
            if(temp.length > 1){aux = temp.substr(0,temp.length-1)}
            
            num1[k-1] = parseInt(num1[k-1]) + parseInt(aux);
        }else{
            res[k] = parseInt(num1[k]) + parseInt(emparejar[k]);
            res[k] = res[k].toString();
        }
    }
    temp = "";
    // se concatena en caso de que el numero creciera en longuitud la variable aux
    if(aux.length > 0){
        temp +=  aux.toString();
        for (let i = 0; i < res.length; i++) {
            temp += res[i];
            
        }
    }else{
        for (let i = 0; i < res.length; i++) {
            temp += res[i];
            
        }
    }
    return temp;

}

console.log(add('12125','12920'));
//console.log(add('123100000','900987654'));
module.exports = add;

