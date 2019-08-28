input = `1000.00
127 Video 7.45
128 Gasoline 16.10`

// input = `1000.00

// 127 Video 7.45

// 128 Gasoline 16.10
// `

console.log(expensesParser(input));

function expensesParser(input) {
    input = input.replace(/\n\n/g, " ");
    input = input.replace(/\n/g, " ");
    array = input.split(' '); 
    var output = new Object();
    if (array.length == 1) {
        console.log('BLANK LINE');
        outuput = "";
    } else {
        n = (array.length-1)/3;
        output.initialBalance = Number(array[0]);
        output.expenses = [];

        let tE = 0;
        for (i = 3; i < array.length; i+=3) {
            tE += Number(array[i]);
        }
        output.totalExpense = tE;
        output.averageExpense = tE/n;
        
        k = 1;
        iB = Number(array[0]);
        for (i = 0; i < n; i++) {
            output.expenses[i] = {};
            for (j =1; j < 5; j++) {
                switch (j) {
                    case 1:
                        output.expenses[i].id = Number(array[k]); 
                        k++;
                        break;

                    case 2:
                        output.expenses[i].description = array[k];
                        k++;
                        break;

                    case 3:
                        output.expenses[i].cost = Number(array[k]);
                        k++;
                        break;

                    case 4:
                        iB = iB - Number(array[k-1]);
                        output.expenses[i].balance = iB;
                        break;
                }        
                output.finalBalance = iB;
            }
        }
    }
    return output
}

module.exports = expensesParser;


