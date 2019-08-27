const prism=require('./prism_sergio.js')

test('el area de un prisma de dimenciones 2,2,2', () => {
    var p3 = new prism(2,2,2)
    expect(p3.area()).toBe(4);
    expect(p3.perimeter()).toBe(8);
  });

  test('el area de un prisma de dimenciones 2,22,7', () => {
    var p4 = new prism(2,22,7)
    expect(p4.volume()).toBe(308);
    expect(p4.perimeter()).toBe(48);
  });