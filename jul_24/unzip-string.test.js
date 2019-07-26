/*  ['3abc', 'aaabbbccc'],
  ['8abc', 'aaaaaaaabbbbbbbbcccccccc'],
  ['2abc', 'aabbcc'],
  ['abcd', 'abcd'],
  ['', ''],
  ['1233abc', 'aaabbbccc'],
  ['22abc1d', 'aabbccd']; */

  let unzip=require('./unzip-string_emmanuelr.js');

  test('cadena vacia', function(){
    expect(unzip('')).toBe('');
  })
  test('varias letras con un numero', function(){
    expect(unzip('8abc')).toBe('aaaaaaaabbbbbbbbcccccccc');
  })
  test('numeros intercalados', function(){
    expect(unzip('22abc1d')).toBe('aabbccd');
  })
  test('numero al final', function(){
    expect(unzip('abcd2')).toBe('abcd');
  })