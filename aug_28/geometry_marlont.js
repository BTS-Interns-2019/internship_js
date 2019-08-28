class figure {
  constructor () {
		this.area = 0;
		this.perimeter = 0;
		this.descriptionObj = {};
		this.description = '';
	}

}

class Square extends figure {
	constructor (side) {
		super();
		this.side = side;
	}

	area () {
		return this.side * this.side;
	}
}




