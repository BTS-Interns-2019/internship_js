// // import { isModuleDeclaration } from "@babel/types";

// function sum(a, b){
//     return a + b
// }

// test('Suma de 2+2', function(){
//     expect(sum(2,2)).toBe(4)
// })

// test('Suma de 3+2', function(){
//     expect(sum(3,2)).toBe(5)
// })

// test('Suma de 2+2', function(){
//     expect(sum(2,2)).toBe(4)
// })

// test('Suma de 2+2', function(){
//     expect(sum(2,7)).toBe(9)
// })
// test('Suma de 2+2', function(){
//     expect(sum(2,7)).toBe(9)
// })

// test('Sum de nombre + apellido', function(){
//     expect(sum("Erick", "Vazquez")).toBe("ErickVazquez")
// })

// test('Sum de letras', function(){
//     expect(sum("asdfjkl;", "qweruiop")).toBe("asdfjkl;qweruiop")
// })


const averageSpeed = require("./function_ex_erick")
let average = averageSpeed()

  test("Obtener promedio de velocidad", function(){
      expect(average(100)).toBe(100)
  })

  test("Obtener promedio de velocidad", function(){
    expect(average(50)).toBe(75)
})

  test("Obtener promedio de velocidad", function(){
    expect(average(75)).toBe(75)
  })
  
  test("Obtener promedio de velocidad", function(){
    expect(average(777)).toBe(250.5)
  })
    test("Obtener promedio de velocidad", function(){
    expect(average(75)).toBe(215.4)
  })
  test("Obtener promedio de velocidad", function(){
    expect(average(999)).toBe(346)
  })



  
  
