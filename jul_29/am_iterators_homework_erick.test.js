const charCounterFunky = require("./am_iterators_homework_erick.js")
const charCounter = charCounterFunky()

test("Analisys from phrases", function (){
  const bye = "Good bye all my folks, i might fly!!!"
  expect(charCounter(bye)).toBe(
    {   
      g: 2,
      o: 3,
      d: 1,
      b: 1,
      y: 3,
      e: 1,
      a: 1,
      l: 4,
      m: 2,
      f: 2,
      k: 1,
      s: 1,
      i: 2,
      h: 1,
      t: 1 }
  )
});

test("Analisys from phrases", function (){
  const clintEastwood = "Tomorrow is promised to no one."
  expect(charCounter(clintEastwood)).toBe(
    {
      t: 2, 
      o: 7,
      m: 2, 
      r: 3, 
      w: 1, 
      i: 2, 
      s: 2, 
      p: 1, 
      e: 2, 
      d: 1, 
      n: 2 
    }
  )
});

test("Analisys from phrases", function (){
  const gandalffTheGrey = "Many that live deserve death."
  expect(charCounter(gandalffTheGrey)).toBe(
    { 
      m: 1,
      a: 3,
      n: 1,
      y: 1,
      t: 3,
      h: 2,
      l: 1,
      i: 1,
      v: 2,
      e: 5,
      d: 2,
      s: 1,
      r: 1 
    }
  )
});
      
test("Analisys from phrases", function (){
  const dumbledore = "One can never have enough socks."
  expect(charCounter(gandalffTheGrey)).toBe(
    { 
      o: 3, 
      n: 4, 
      e: 5, 
      c: 2, 
      a: 2, 
      v: 2, 
      r: 1, 
      h: 2, 
      u: 1, 
      g: 1, 
      s: 2, 
      k: 1 
    }
  )
});

test("Analisys from phrases", function (){
  const greet = "Hi Every body!"
  expect(charCounter(greet)).toBe(
    { 
      h: 1, 
      i: 1, 
      e: 2, 
      v: 1, 
      r: 1, 
      y: 2, 
      b: 1, 
      o: 1, 
      d: 1 
    }
)});
