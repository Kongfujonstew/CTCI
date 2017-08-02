var Stack = () => {
  this.container = [];
  this.min;

  this.add = (value) => {
    if (!this.min) {
      this.min = value;
    } else if (value < this.min) {
      this.min = value;
    }
    container.push(value);
  }

  this.this.min = () => {
    return this.min;
  }


}



var stacko = new Stack();