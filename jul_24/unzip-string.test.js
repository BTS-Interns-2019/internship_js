const requireGlob = require('require-glob');
const modules = requireGlob.sync(['./unzip-string_*.js']);

const unzipString = modules[Object.keys(modules)[0]];

const cases = [
  ['3abc', 'aaabbbccc'],
  ['8abc', 'aaaaaaaabbbbbbbbcccccccc'],
  ['2abc', 'aabbcc'],
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
