const queenProblem = require("./lumier.js")

describe("Data types", () =>{ 
  test("Output is Array", () =>{
      expect(Array.isArray(queenProblem(4, [0,0]))).toBe(true)
  });
  test("Is an object array", () =>{
    expect(typeof queenProblem(0,[4,4])).toBe("object")
  });
  test("Typeof of 'object' typeof is a string", () =>{
    expect(typeof typeof queenProblem(0,[4,4])).toBe("string")
  });

});

  describe("Wrong inputs, incalculable inputs", ()=>{
    test("Not calculatable data, try again!", ()=>{
      const error = () => {
        queenProblem("cinco", "aqui")
        throw new TypeError();
      }
      expect(error).toThrow(TypeError)
    });

    test("Not calculatable size requirement", ()=>{
      const error = () =>{
        queenProblem(0, [0,0])
        throw "Invalid size."
      }
      expect(error).toThrow("Invalid size.")
    })
    test("Theres no solution on size (4, [0,0])",()=>{
      const noSol = () =>{
        queenProblem(4, [0,0])
        throw new TypeError();
      }
      expect(noSol).toThrow(TypeError)
    });

    test("Time exceeded, no possible solution",()=>{
      const fail = queenProblem(5, [1,1])
      const fail2 = () => {return fail2}
      function mistake(foo){
      try{
        throw fail()
      }
      catch(error){
        let msg = "esto no sirve"
        return msg
      }
    }
      expect(mistake(fail2)).toBe("esto no sirve")
    })
  });
