const prism = require ( './prism')

describe('Prism 1', () => {

  const prism1 = new prism(7,16,14)

  describe('Attribues.', () => {
    test('Prism 1 long', () => {
      expect(prism1.long).toBe(7)
    });
    test('Prism 1 height', () => {
      expect(prism1.height).toBe(16)
    });
    test('Prism 1 width', () => {
      expect(prism1.width).toBe(14)
    });
  });

  describe('area, perimeter, volume',() => {
    test('Prism 1 perimeter', () => {
      expect(prism1.perimeter()).toBe(42)
    });
    test('Prism 1 area', () => {
      expect(prism1.area()).toBe(98)
    });
    test('Prism 1 width', () => {
      expect(prism1.volume()).toBe(1568)
    });
  });

});

describe('Prism 2. Real random input', () => {

  const prism2 = new prism(4852,2345678,76765)

  describe('Attribues.', () => {
    test('Prism 2 long', () => {
      expect(prism2.long).toBe(4852)
    });
    test('Prism 2 height', () => {
      expect(prism2.height).toBe(2345678)
    });
    test('Prism 2 width', () => {
      expect(prism2.width).toBe(76765)
    });
  });

  describe('area, perimeter, volume',() => {
    test('Prism 2 perimeter', () => {
      expect(prism2.perimeter()).toBe(163234)
    });
    test('Prism 2 area', () => {
      expect(prism2.area()).toBe(372463780)
    });
    test('Prism 2 width', () => {
      expect(prism2.volume()).toBe(873680094542840)
    });
  });

});

