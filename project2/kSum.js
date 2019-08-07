function add(num1, num2) {
    let temp = "";
    if(num2.length > num1.length){
        temp = num2;
        num2 = num1;
        num1 = temp;
    }

    num1 = num1.split('');
    console.log(num1);
    let emparejar = [];
    num2 = num2.split('');
    let res = [];
    for (let i = 0; i < num1.length; i++) {
        emparejar[i] = num1[i];
        res[i] = 0;
    }

    for (let i = emparejar.length-1,j = 0; i >= 0; i--,j++) {
        if(num2[num2.length-j-1] == undefined){emparejar[i] = 0
        }else{
            emparejar[i] = parseInt(num2[num2.length-j-1]);
        }
    }
temp = "";
let aux = 0;
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
            
            num1[k-1] = parseInt(num1[k-1]) + parseInt(temp[0]);
        }else{
            res[k] = parseInt(num1[k]) + parseInt(emparejar[k]);
            res[k] = res[k].toString();
        }
    }
    temp = "";
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

//console.log(add('131151201344081895330000000000','0006534324866'));
//console.log(add('123100000','900987654'));
module.exports = add;
