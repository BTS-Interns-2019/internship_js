//Miguel Angel Vivanco Maldonado
/**
 * arrayGenerator
 * @param {int} number
 * @returns {array}
 */
function arrayGenerator(number) {
  res = [];
  for(let i=0;i<=number;i++)res.push(i.toFixed());
  if(res[0]=='0'){
    res.unshift(arrayGenerator(number));
  }
  return res;
}

module.exports = arrayGenerator;

console.log(arrayGenerator(5));