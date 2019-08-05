const queenProblem = require("./lumier.js")

describe("Data types", () =>{ 
  test("Output is Array", () =>{
      expect(Array.isArray(queenProblem(4, [0,0]))).toBe(true)
  });
  test("Is an object array", () =>{
    expect(typeof queenProblem(5,[1,1])).toBe("object")
  });
  test("Typeof of 'object' typeof is a string", () =>{
    expect(typeof typeof queenProblem(5,[1,1])).toBe("string")
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
      let failSize = 0
      const error = () =>{
        queenProblem(failSize, [0,0])
        throw new TypeError 
        
      }
      expect(error).toThrow(TypeError)
    })
    test("Theres no solution on size (4, [0,0])",()=>{
      const noSol = () =>{
        queenProblem(4, [0,0])
        throw new TypeError();
      }
      expect(noSol).toThrow(TypeError)
    });
  });
