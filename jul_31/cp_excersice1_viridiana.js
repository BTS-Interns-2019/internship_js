# Fire in the whole

There are some candles in a room that you have to blow before they start a fire
as they are of different sizes, you can not blow all of them at the same time only the tallest ones

For example: there are 4 candles of height 4,4,1,3 you will be able to blow out 2 candles successfully, since the tallest candles are of height 4 and there are 2 such candles.

you will receive 1 or more Arrays of candles
doesn't matter how many arrays you receive, you will return only one number of candles that you where able to blow the first time.

function avoidingFire(arguments) {

  let result=arguments
    result=result.reduce((x, y)=>x.concat(y),[])
    result=result.filter((x,y,arg)=>x===Math.max(...arg))
          result=result.length;
          return result
  
}

console.log(avoidingFire([1,2,3,4],[2,3,4,5]))

module.exports=avoidingFire;

