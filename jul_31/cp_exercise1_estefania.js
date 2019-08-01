function avoidingFire(...arr) {
    var arr2 =arr.reduce(function(a,b) {
        return a.concat(b);
      }).filter((item, i, arrMax) => item ===  Math.max(...arrMax)).length
        return arr2
}

console.log(avoidingFire([2,2,2,1], [6,9,2], [7,7,1,2], [8,8,1,7,3]))

module.exports = avoidingFire;