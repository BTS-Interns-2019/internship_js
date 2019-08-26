const prism = require('./prism_marlont');

test('Normal Input', function(){
    let p = new prism(2,2,2);
    console.log(p);
    
    expect(p.long).toBe(2);
    expect(p.width).toBe(2);
    expect(p.height).toBe(2);

    expect(p.parameter).toBe(8);
    expect(p.area).toBe(4);
    expect(p.volume).toBe(8);
}) 