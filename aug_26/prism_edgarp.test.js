const prisms = require ('./prism_edgarp.js');

test ('Test for prisms', () => {
    const p = new prisms (2, 1, 1);
    expect (p.perimeter()).toBe(6);
    expect (p.area()).toBe(2);
    expect (p.volume()).toBe(2);
    
});

test ('Test for prisms 2', () => {
    const p = new prisms (1, 1, 1);
    expect (p.perimeter()).toBe(4);
    expect (p.area()).toBe(1);
    expect (p.volume()).toBe(1);
    
});

test ('Test for prisms 3', () => {
    const p = new prisms (4,2,6);
    expect (p.perimeter()).toBe(12);
    expect (p.area()).toBe(8);
    expect (p.volume()).toBe(48);
    
});

test ('Test for prisms 4', () => {
    const p = new prisms (5,5,5);
    expect (p.perimeter()).toBe(20);
    expect (p.area()).toBe(25);
    expect (p.volume()).toBe(125);
    
});

test ('Test for prisms 5', () => {
    const p = new prisms (6,5,4);
    expect (p.perimeter()).toBe(22);
    expect (p.area()).toBe(30);
    expect (p.volume()).toBe(120);
    
});