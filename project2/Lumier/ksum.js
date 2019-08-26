/**
 * Sumar dos strings numericos a la antigüita
 * @param {string} strNum1 
 * @param {string} strNum2 
 */
function kSum(strNum1, strNum2) {
    while (strNum1.length != strNum2.length) {//si son de diferentes tamaños
        if (strNum1.length < strNum2.length) {//agregarmos 0s  ala izquierda al menor
            strNum1 = "0" + strNum1
        } else {
            strNum2 = "0" + strNum2
        }
    }
    let res = "";
    let llevamos = 0// inicialmente llevamos 0
    for (let i = strNum1.length - 1; i >= 0; i--) {//de derecha a izquierda
        let n1 = strNum1[i]
        let n2 = strNum2[i]
        let sumaParcial = parseInt(n1) + parseInt(n2) + llevamos//sumamos el caracter de los dos string mas lo que llevamos
        llevamos = sumaParcial >= 10 ? 1 : 0 //si el resultado de esa suma es diez o mayor llevamos 1, si no 0
        sumaParcial = sumaParcial >= 10 ? sumaParcial - 10 : sumaParcial//y el resultado de esa suma van a ser las unidades
        res = sumaParcial + res//agregamos a la izquierda de nuestro resultado final
    }
    if (llevamos > 0) {//si al fial de las sumas nos quedo un residuo tambien lo agregamos
        res = llevamos + res
    }
    return res

}
module.exports = kSum