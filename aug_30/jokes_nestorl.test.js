const giveAJoke = require ('./jokes_nestorl.js');

const url = 'https://sv443.net/jokeapi/category';
const category = ["Programming","Miscellaneous","Dark","Any"]
test("should be an object",()=>{
    expect(typeof giveAJoke(url,category[0])).toBe("object")
}) 
test("saySetup should be a string ",()=>{
    giveAJoke(url, category[1]).then((ok)=>{
        expect(typeof ok.saySetup()).toBe("string")
    });
})
test("sayPunchLine should be a string ",()=>{
    giveAJoke(url, category[1]).then((ok)=>{
        expect(typeof ok.sayPunchLine()).toBe("string")
    });
})
test('fails with an error', async () => {
    expect(giveAJoke(url+"d",category[0])).rejects.toEqual(`new Error('No jokes at url: ${url}d/${category[0]}?type=twopart')`);
  });