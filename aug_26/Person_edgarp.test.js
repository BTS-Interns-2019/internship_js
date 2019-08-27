const person = require ('./Person_edgarp.js')

const p = new person ('Edgar', 'Peregrino');
test ('Test for Person Name: Edgar Peregrino', () => {
    
    expect (p.name).toEqual('Edgar');
    expect (p.lastName).toEqual('Peregrino');
    expect (p.fullName).toEqual('Edgar Peregrino');
    
});

test ('Test for Person Name: Pedro Peregrino', () => {
    p.name = 'Pedro'
    expect (p.name).toEqual('Pedro');
    expect (p.lastName).toEqual('Peregrino');
    expect (p.fullName).toEqual('Pedro Peregrino');
    
});

test ('Test for Person Name: Pedro Jimenez', () => {
    p.lastName = 'Jimenez'
    expect (p.name).toEqual('Pedro');
    expect (p.lastName).toEqual('Jimenez');
    expect (p.fullName).toEqual('Pedro Jimenez');
    
});

test ('Test for Person Name: Federico Gonzalez', () => {
    p.fullName = 'Federico Gonzalez'
    expect (p.name).toEqual('Federico');
    expect (p.lastName).toEqual('Gonzalez');
    expect (p.fullName).toEqual('Federico Gonzalez');
    
});

test ('Test for Person Name: Federico Gonzalez', () => {
    p.fullName = 'Pablo Lopez Hernandez'
    expect (p.name).toEqual('Pablo');
    expect (p.lastName).toEqual('Lopez Hernandez');
    expect (p.fullName).toEqual('Pablo Lopez Hernandez');
    
});