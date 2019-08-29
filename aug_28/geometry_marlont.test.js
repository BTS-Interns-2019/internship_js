const {Square, Rectangle,      Triangle,      Circle, 
       Cube,   prismRectangle, prismTriangle, Cilinder} = require('./geometry_marlont');

test('Square instance', function(){
  let square = new Square(4);
  expect(square.base).toBe(4);
  expect(square.descriptionObj).toEqual({
    'type' : 'Square',
    'mesures' : {
      'base' : 4
    }
  });
	expect(square.description).toBe('Square of base = 4');
	expect(square.area).toBe(16);
	expect(square.perimeter).toBe(16);
});

test('Rectangle instance', function(){
  let rectangle = new Rectangle(4,3);
  expect(rectangle.base).toBe(4);
  expect(rectangle.height).toBe(3);
  expect(rectangle.descriptionObj).toEqual({
    'type' : 'Rectangle',
    'mesures' : {
      'base' : 4,
      'height' : 3
    }
  });
	expect(rectangle.description).toBe('Rectangle of base = 4 and height = 3');
	expect(rectangle.area).toBe(12);
	expect(rectangle.perimeter).toBe(14);
});

test('Triangle instance', function(){
  let triangle = new Triangle(4,3);
  expect(triangle.base).toBe(4);
  expect(triangle.height).toBe(3);
  expect(triangle.descriptionObj).toEqual({
    'type' : 'Triangle',
    'mesures' : {
      'base' : 4,
      'height' : 3
    }
  });
	expect(triangle.description).toBe('Triangle of base = 4 and height = 3');
	expect(triangle.area).toBe(6);
	expect(triangle.perimeter).toBe(11.21);
});

test('Circle instance', function(){
  let circle = new Circle(4);
  expect(circle.radius).toBe(4);
  expect(circle.descriptionObj).toEqual({
    'type' : 'Circle',
    'mesures' : {
      'radius' : 4
    }
  });
	expect(circle.description).toBe('Circle of radius = 4');
	expect(circle.area).toBe(50.27);
	expect(circle.perimeter).toBe(25.13);
});

test('Cube instance', function(){
  let cube = new Cube(4);
  expect(cube.base).toBe(4);
  expect(cube.descriptionObj).toEqual({
    'type' : 'Cube',
    'mesures' : {
      'base' : 4
    }
  });
	expect(cube.description).toBe('Cube of base = 4');
	expect(cube.area).toBe(96);
	expect(cube.perimeter).toBe(16);
});

test('Cube instance from his 2D Figure', function(){
	let sq = new Square(6);
  let cube = new Cube(sq);
  expect(cube.base).toBe(6);
  expect(cube.descriptionObj).toEqual({
    'type' : 'Cube',
    'mesures' : {
      'base' : 6
    }
  });
	expect(cube.description).toBe('Cube of base = 6');
	expect(cube.area).toBe(216);
	expect(cube.perimeter).toBe(24);
});

test('Prism Rectangle instance', function(){
  let pr = new prismRectangle(4,3,6);
	expect(pr.base).toBe(4);
	expect(pr.height).toBe(3);
	expect(pr.vHeight).toBe(6);
  expect(pr.descriptionObj).toEqual({
    'type' : 'Prism Rectangle',
    'mesures' : {
			'base' : 4,
			'height' : 3,
			'vHeight' : 6
    }
  });
	expect(pr.description).toBe('Prism Rectangle of base = 4, height = 3 and vHeight = 6');
	expect(pr.area).toBe(108);
	expect(pr.perimeter).toBe(14);
});

test('Prism Rectangle instance from his 2D Figure', function(){
	let rc = new Rectangle(6,2);
  let pr = new prismRectangle(rc,4);
	expect(pr.base).toBe(6);
	expect(pr.height).toBe(2);
	expect(pr.vHeight).toBe(4);
  expect(pr.descriptionObj).toEqual({
    'type' : 'Prism Rectangle',
    'mesures' : {
			'base' : 6,
			'height' : 2,
			'vHeight' : 4
    }
  });
	expect(pr.description).toBe('Prism Rectangle of base = 6, height = 2 and vHeight = 4');
	expect(pr.area).toBe(88);
	expect(pr.perimeter).toBe(16);
});

test('Prism Triangle instance', function(){
  let pt = new prismTriangle(4,3,6);
	expect(pt.base).toBe(4);
	expect(pt.height).toBe(3);
	expect(pt.vHeight).toBe(6);
  expect(pt.descriptionObj).toEqual({
    'type' : 'Prism Triangle',
    'mesures' : {
			'base' : 4,
			'height' : 3,
			'vHeight' : 6
    }
  });
	expect(pt.description).toBe('Prism Triangle of base = 4, height = 3 and vHeight = 6');
	expect(pt.area).toBe(55.266615305567875);
	expect(pt.perimeter).toBe(11.21);
});

test('Prism Triangle instance from his 2D Figure', function(){
	let tri = new Triangle(6,2);
  let pt = new prismTriangle(tri,4);
	expect(pt.base).toBe(6);
	expect(pt.height).toBe(2);
	expect(pt.vHeight).toBe(4);
  expect(pt.descriptionObj).toEqual({
    'type' : 'Prism Triangle',
    'mesures' : {
			'base' : 6,
			'height' : 2,
			'vHeight' : 4
    }
  });
	expect(pt.description).toBe('Prism Triangle of base = 6, height = 2 and vHeight = 4');
	expect(pt.area).toBe(40.844410203711924);
	expect(pt.perimeter).toBe(13.21);
});

test('Cilinder instance', function(){
  let cl = new Cilinder(4,3);
	expect(cl.radius).toBe(4);
	expect(cl.vHeight).toBe(3);
  expect(cl.descriptionObj).toEqual({
    'type' : 'Cilinder',
    'mesures' : {
			'radius' : 4,
			'vHeight' : 3
    }
  });
	expect(cl.description).toBe('Cilinder of radius = 4 and vHeight = 3');
	expect(cl.area).toBe(175.93);
	expect(cl.perimeter).toBe(25.13);
});

test('Cilinder instance from his 2D Figure', function(){
	let cr = new Circle(6);
  let cl = new Cilinder(cr,4);
	expect(cl.radius).toBe(6);
	expect(cl.vHeight).toBe(4);
  expect(cl.descriptionObj).toEqual({
    'type' : 'Cilinder',
    'mesures' : {
			'radius' : 6,
			'vHeight' : 4
    }
  });
	expect(cl.description).toBe('Cilinder of radius = 6 and vHeight = 4');
	expect(cl.area).toBe(376.99);
	expect(cl.perimeter).toBe(37.7);
});

/*test('3D Figure is bad instanced from a incorrect 2D Figure', function(){
	let cr = new Circle(6);
  let cb = new Cube(cr);
	expect(cb.base).toBe(undefined);
  expect(cb.descriptionObj).toBe(undefined);
	expect(cb.description).toBe(undefined);
	expect(cb.area).toBe(undefined);
	expect(cb.perimeter).toBe(undefined);
});*/
