

const input1 = `1000.00     
127 Video 7.45
128 Gasoline 16.10`

function expensesParser(input){
  let fullElements = input.split("\n")  // length = 2
  const iBalance = fullElements.shift()
  
  const expense = []
      var shop = {expenses:{
        id:0,
        description:"",
        cost:0,
        balance:0
        }
      }
    
      for(i of fullElements){
        let elem = i.split(" ");
        for(v in elem){
          switch(+v){
            case 0:
              shop.expenses.id = +elem[v]
              console.log(expense)
            break;
            case 1:
              shop.expenses.description = elem[v]
            break;
            case 2:
              shop.expenses.cost = +elem[v]
              shop.expenses.balance = iBalance - elem[v]
              expense.push(shop)
              console.log(shop)
            break;       
            
          }
        }
      }
  console.log(expense)   
}

console.log(expensesParser(input1))





module.exports = expensesParser;


      // var shop = ["expenses"[
      //   ["id"]
      //   ["description"]
      //   ["cost"]
      //   ["balance"]
      // ]
      // ]
      // for(i of fullElements){
      //   let elem = i.split(" ");
      //   for(v in elem){
      //     switch(+v){
      //       case 0:
      //         shop[0][0][1] = +elem[v]
      //         console.log(expense)
      //       break;
      //       case 1:
      //         shop[0][0][2] = elem[v]
      //       break;
      //       case 2:
      //         shop[0][0][3] = +elem[v]
      //         shop[0][0][4] = iBalance - elem[v]
      //         expense.push(shop)
      //         console.log(shop)
      //       break;      