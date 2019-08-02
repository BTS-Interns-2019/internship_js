
const smallest = require('./smallest');

test('test closest1', function(){
  let response = smallest(261235);
  expect(response[0]).toEqual(126235);
  expect(response[1]).toEqual(2);
  expect(response[2]).toEqual(0);
})
test('Another original test',() =>{
let answer= smallest(211);
expect(answer[0]).toEqual(112);
expect(answer[1]).toEqual(0);
expect(answer[2]).toEqual(2);
});
test("Output must be an array",()=>{
  let answe= smallest(112);
  expect(typeof (answe)).toBe("object");
});

