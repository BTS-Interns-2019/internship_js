
const mesuresNames = ['base', 'height', 'radius', 'vHeight'];

const Figure = {
  get descriptionObj() {
    const obj = {
      type: this.type,
      mesures: {},
    };

    this.getMesures().forEach(([key, val]) => {
      obj.mesures[key] = val;
    });

    return obj;
  },
  get description() {
    let str = `${this.type} of `;

    str += this.getMesures()
      .map(([key, v]) => `${key} = ${v}`)
      .join(' ');

    return str;
  },
  getMesures() {
    const mesures = [];

    mesuresNames.forEach((key) => {
      if (Object.prototype.hasOwnProperty.call(this, key)) {
        mesures.push([key, this[key]]);
      }
    });

    return mesures;
  },
};

function Rectangle(base, height) {
  this.base = base;
  this.height = height;
}
Rectangle.prototype = Object.create(Figure, {
  type: {
    value: 'Rectangle',
    writable: false,
  },
  area: {
    get() {
      return this.base * this.height;
    },
  },
  perimeter: {
    get() {
      return this.base * 2 + this.height * 2;
    },
  },
});

module.exports = {
  Rectangle,
};
