const input= "1000.00\n127 Video 7.45\n128 Gasoline 16.10";


function expensesParser(string) {
    string.split("\n/",3);
    store= [];
    // Array.prototype.join(storage)
    console.log(string.length);
  for (let i =0; i<1; i++){
      console.log(string);
      store[i]=string;
  }

  console.log(store);
}


console.log(expensesParser(input));
module.exports = expensesParser;


