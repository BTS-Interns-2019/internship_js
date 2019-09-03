module.exports = {
  "extends": "airbnb-base",
  overrides: [
    {
      files: [
        "**/*.test.js"
      ],
      env: {
        jest: true // now **/*.test.js files' env has both es6 *and* jest
      }
    }
  ],
};
