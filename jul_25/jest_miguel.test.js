function suma(a,b){
    return a+b;
}

function averageSpeed(velocidad){
    velocidades = [];
    
    function funcionHija(velocidad){
        let suma=0;
        velocidades.push(velocidad);
        for(let c=0;c<velocidades.length;c++){
            suma=suma+velocidades[c];
        }
        return suma/velocidades.length;
    }
    return funcionHija;
}

/*SUMAS*/
test('Suma 2+2', function(){
    expect(suma(2,2)).toBe(4);//Matcher
})
test('Suma 4+3', function(){
    expect(suma(4,3)).toBe(7);//Matcher
})
test('Suma 4+9', function(){
    expect(suma(4,9)).toBe(13);//Matcher
})
test('Suma 1+1', function(){
    expect(suma(1,1)).toBe(2);//Matcher
})
test('Suma 12+54', function(){
    expect(suma(12,54)).toBe(66);//Matcher
})
test('Suma 101244+763728', function(){
    expect(suma(101244,763728)).toBe(864972);//Matcher
})
/* FUNCION */
let average = averageSpeed(0);
test("Promedio 1 : 100",function(){
    expect(average(100)).toBe(100);
})
test("Promedio 2 : 50+100",function(){
    expect(average(50)).toBe(75);
})
test("Promedio 3 : 100+50+75",function(){
    expect(average(75)).toBe(75);
})
test("Promedio 4 : 100+50+75+75",function(){
    expect(average(75)).toBe(75);
})
test("Promedio 5 : 100+50+75+75+100",function(){
    expect(average(100)).toBe(80);
})
test("Promedio 6 : 100+50+75+75+100+20",function(){
    expect(average(20)).toBe(70);
})