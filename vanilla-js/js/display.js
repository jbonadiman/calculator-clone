class Display {
  static INTL = Intl.NumberFormat(undefined, {
    maximumFractionDigits: 8
  });

  constructor() {
    this.element = document.getElementsByClassName('value')[0];
  }

  update(value) {
    this.element.textContent = value;
  }
}

export default Display;