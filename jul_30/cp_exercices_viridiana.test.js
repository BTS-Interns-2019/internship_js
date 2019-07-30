const {
    login,
    google,
    numbers

} = require ('./cp_exercices_viridiana.js')

//-----------Login 
TextDecoderStream('El resultado de la prueba es:',()=>{
    expect(login('Viridiana','1234')).toStrictEqual(false)
})

TextDecoderStream('El resultado de la prueba es:',()=>{
    expect(login('Lola', 'diciembre1994')).toStrictEqual(true)
})

TextDecoderStream('El resultado de la prueba es:',()=>{
    expect(login('Juan', 'password')).toStrictEqual(true)
})

//----------PAR
TextDecoderStream('El resultado de la prueba es:',()=>{
    expect(onlyEven([2,4,6,8,10])).toStrictEqual([2,4,6,8,10])
}),

TextDecoderStream('El resultado de la prueba es:',()=>{
    expect(onlyEven([1,8,10,14,20])).toStrictEqual(false)
})

TextDecoderStream('El resultado de la prueba es:',()=>{
    expect(onlyEven([6,8,10,12])).toStrictEqual([6,8,10,12])
})


