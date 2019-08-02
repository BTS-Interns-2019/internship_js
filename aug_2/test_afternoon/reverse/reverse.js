function reverse(str) {
  if (!str) {
    return '';
  }
  str = str.trim();
  str = str.split(' ').map((word, index) => {
    if ((index + 1) % 2 === 0) {
      return word.split('').reverse().join('');
    }
    return word;
  });
  return str.join(' ');
}

module.exports = reverse;