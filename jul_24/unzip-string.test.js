const unzipString = require('./unzip-string.js');

const cases = [
  ['3abc', 'aaabbbccc'],
  ['8abc', 'aaaaaaaabbbbbbbbcccccccc2'],
  ['2abc', 'aabbcc2'],
  ['abcd', 'abcd'],
  ['', ''],
  ['1233abc', 'aaabbbccc'],
  ['22abc1d', 'aabbccd'],
]

cases.forEach(([input, output]) => {
  test(`unzipString(${input}) => ${output}`, () => {
    expect(unzipString(input)).toBe(output);

  })
});
