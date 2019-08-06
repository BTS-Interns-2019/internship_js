const queenProblem = require("./lumier.js")

describe("Data types", () =>{ 
  test("Output is Array", () =>{
      expect(Array.isArray(queenProblem(4, [2,0]))).toBe(true)
  });
  test("Is an object array", () =>{
    expect(typeof queenProblem(4,[2,0])).toBe("object")
  });
  test("Typeof of 'object' typeof is a string", () =>{
    expect(typeof typeof queenProblem(4,[2,0])).toBe("string")
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
      }
      expect(error).toThrow(RangeError)
    })
    test("Theres no solution on size (4, [0,0])",()=>{
      const noSol = () =>{
        queenProblem(4, [2,0])
        throw new TypeError();
      }
      expect(noSol).toThrow(TypeError)
    });
  });

  describe("Correct cases", ()=>{
    const queenAt5 = queenProblem(5,[1,1])
    let result = [ 
      [ 0, 0, 0, 1, 0 ],
      [ 0, 1, 0, 0, 0 ],
      [ 0, 0, 0, 0, 1 ],
      [ 0, 0, 1, 0, 0 ],
      [ 1, 0, 0, 0, 0 ] ];
    let queenPos = result[1,1]
    
    test("Board of 5, coods for Queen [1,1]", () =>{ 
      expect(queenAt5).toStrictEqual(result)
    })
    
    test("Initial Queen is at [1,1] on a 5x5 board", () =>{
      expect(result[1,1]).toEqual(queenPos)
    })
  })
