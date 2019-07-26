var input = `1000.00
127 Video 7.45
128 Gasoline 16.10`

function expensesParser(input){
    var sinSaltos= input.replace(/\n/g, " ")
    var arr = sinSaltos.split(" ");
    //console.log(arr)
    var obj = new Object()
    if (arr.length == 0) {
        return "No hay datos"
    } else {
        obj.initialBalance = Number(arr[0])
        obj.expenses = []
        let y = 1
        let resta = Number(arr[0])
        for (i=0; i<(arr.length-1)/3; i++) {
            obj.expenses[i] = new Object()
            for(x=1; x < 5; x++) {
               
                switch (x) {
                    case 1: 
                        obj.expenses[i].id = Number(arr[y])
                        y++
                        break

                    case 2: 
                        obj.expenses[i].description = (arr[y])
                        y++
                        break

                    case 3:
                        obj.expenses[i].cost = Number(arr[y])
                        y++
                        break

                    case 4:
                        resta = resta-Number(arr[y-1])
                        obj.expenses[i].balance = resta;
                        break
                }
            }
        }
        obj.totalExpenses = Number(arr[3]) +  Number(arr[6]);
        obj.averageExpenses = (Number(arr[3]) +  Number(arr[6])) /2;
        obj.finalBalance = resta
        console.log(obj)
        return obj
    }
    
}

expensesParser(input)

module.exports = expensesParser;