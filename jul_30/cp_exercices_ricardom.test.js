var {login,onlyEven,evenIndex} = require("./cp_exercices_ricardom.js");


// login

test('Test 1 login: ',function(){
    expect(login( "admin", "admin")).toBe(true);
})

test('Test 2 login: ',function(){
    expect(login( "ricardo", "contraseña")).toBe(false);
})

test('Test 3 login: ',function(){
    expect(login( "ajalas", "potatoe")).toBe(false);
})

// onlyEven

test('test 1 onlyEven: ', function(){
    expect(onlyEven([1,2,3,4,5])).toBe(false);
})

test('test 2 onlyEven: ', function(){
    expect(onlyEven([2,4,6,8])).toStrictEqual([2,4,6,8]);
})

test('test 3 onlyEven: ', function (){
    expect(onlyEven([10,12,11,100])).toBe(false);
})


//google



//evenIndex
test('test 1 evenIndex: ', function (){
    expect(evenIndex([10,12,11,100])).toStrictEqual([0,1,3]);
})

test('test 2 evenIndex: ', function (){
    expect(evenIndex([2,12,1,13,7])).toStrictEqual([0,1]);
})

test('test 3 evenIndex: ', function (){
    expect(evenIndex([1,2,3,4,5,6])).toStrictEqual([1,3,5]);
})