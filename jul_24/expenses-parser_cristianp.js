//const input = "1000.00";
function gastosParser(obj){
    var div = obj.split(" ");
    var balance = div[0];
    var total = 0;
    var conteo = 0;
    var contenido = "initialBalance: " + balance + ",\nexpenses: [";
    for(var i = 1; i< div.length;i++){
        contenido += "\n{id: " + div[i] + ",\ndescription: '" +
        div[i+1] + "',\ncost: " + div[i+2] + ",\nbalance: " + (balance-(div[i+2]) ) + "}";
        balance-=div[i+2];
        total +=parseFloat(div[i+2]);
        conteo++;
        i++;
        i++;
        //console.log(div[i], div[i+1], div[i+2], i);
        //continue;
    }
    contenido += "\n], \ntotalExpence: " + total + 
    "\naverageExpence: " + (total/conteo) + 
    "\nfinalBalance: " + balance;
    return contenido;
}
console.log(gastosParser("1000 127 video 7.45 128 gasoline 16.10 129 agua 15 "));

module.exports = gastosParser;