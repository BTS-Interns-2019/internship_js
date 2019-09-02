const giveMeAJoke = require ('./jokes_nestorl.js');

const url = 'https://sv443.net/jokeapi/category';
const category = ["Programming","Miscellaneous","Dark","Any"]
test("should be an object",()=>{
    expect(typeof giveMeAJoke(url,category[0])).toBe("object")
}) 
test("saySetup should be string ",()=>{
    giveMeAJoke(url, category[0]).then((ok)=>{
        expect(typeof ok.saySetup()).toBe("string")
        expect(typeof ok.sayPunchLine()).toBe("string")
    });
})
test("sayPunchLine should be string ",()=>{
    giveMeAJoke(url, category[1]).then((ok)=>{
        expect(typeof ok.sayPunchLine()).toBe("string")
    });
})
test('fails with an error', async () => {
    expect(giveMeAJoke(url+"d",category[0])).rejects.toEqual(`new Error('No jokes at url: ${url}d/${category[0]}?type=twopart')`);
  });