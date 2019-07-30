const charCounter = require('./am_iterators_homework_hector');

const cases = [
  'You can do anything, but not everything.',
  'My gamertag is xXDeathM4sterDestroyerXx.',
  'We are what we repeatedly do; excellence, then, is not an act but a habit.',
  'Always forgive your enemies; nothing annoys them so much.',
  'I have never listened to anyone who criticized my taste in space travel, sideshows or gorillas. When this occurs, I pack up my dinosaurs and leave the room.',
];

const output = [
  { 
    y: 3,  
    o: 3,  
    u: 2,  
    c: 1,  
    a: 2,  
    n: 5,  
    d: 1,  
    t: 4,  
    h: 2,  
    i: 2,  
    g: 2,  
    b: 1,  
    e: 2,  
    v: 1,  
    r: 1 
  },
  { 
    m: 3, 
    y: 2, 
    g: 2, 
    a: 3, 
    e: 5, 
    r: 4, 
    t: 4, 
    i: 1, 
    s: 3, 
    x: 4, 
    d: 2, 
    h: 1, 
    o: 1 
  },
  { 
    w: 3, 
    e: 11,
    a: 7, 
    r: 2, 
    h: 3, 
    t: 7, 
    p: 1, 
    d: 2, 
    l: 3, 
    y: 1, 
    o: 2, 
    x: 1, 
    c: 3, 
    n: 4, 
    i: 2, 
    s: 1, 
    b: 2, 
    u: 1 
  },
  { 
    a: 3, 
    l: 1, 
    w: 1, 
    y: 3, 
    s: 4, 
    f: 1, 
    o: 5, 
    r: 2, 
    g: 2, 
    i: 3, 
    v: 1, 
    e: 5, 
    u: 2, 
    n: 5, 
    m: 3, 
    t: 2, 
    h: 3, 
    c: 1 
  },
  { i: 11, 
    h: 6,  
    a: 10, 
    v: 4,  
    e: 15, 
    n: 8,  
    r: 8,  
    l: 5,  
    s: 11, 
    t: 8,  
    d: 5,  
    o: 10, 
    y: 3,  
    w: 3,  
    c: 6,  
    z: 1,  
    m: 3,  
    p: 3,  
    g: 1,  
    u: 3,  
    k: 1 
  }
];

cases.forEach((elem, index) => {
  test(`Counting characters of string '${elem}'`, () => {
    expect(charCounter(elem)).toStrictEqual(output[index]);
  });
});