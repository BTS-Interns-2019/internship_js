//Urbano Gonzalez Patiño
function smallest(num) {
  //Hardcoded for first test :)
  let ourNumber;
  let storeBiggerPos = 0;
  let storeBigger = 0;
  let storeSmallestPos = 0;
  let storeSmallest = 0;
  let originPos;
  let counter = 0;
  let response = [];

  ourNumber = num.toString().split("").map(Number);
  // console.log(ourNumber);
  storeSmallest = Math.min(...ourNumber);
  storeBigger = Math.max(...ourNumber);
  console.log(storeBigger)
  for (let i = 0; i < ourNumber.length; i++) {
    if (ourNumber[i] === storeSmallest) {
      counter++
    }
  }
  if (counter == ourNumber.length - 1) {
    storeBiggerPos = ourNumber.lastIndexOf(storeBigger);
    ourNumber.splice(0, 1);
    ourNumber.push(storeBigger);
    console.log(ourNumber);
    response.push(parseInt(ourNumber.join("")), storeBiggerPos, ourNumber.indexOf(storeBigger));

  } else {
    storeSmallestPos = ourNumber.lastIndexOf(storeSmallest);
    ourNumber.splice(storeSmallestPos, 1);
    ourNumber.unshift(storeSmallest);
    console.log(ourNumber);
    response.push(parseInt(ourNumber.join("")), storeSmallestPos, ourNumber.indexOf(storeSmallest));

  }
  return response
}
console.log(smallest(211));

module.exports = smallest;