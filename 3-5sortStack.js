var Stack = function () {
  this.container = [];

  this.add = (value) => {
    this.container.push(value);
    return value;
  };

  this.peek = () => {
    return this.container[this.container.length-1];
  };

  this.pop = () => {
    return this.container.pop();
  };

  this.isEmpty = () => {
    return this.container.length === 0;
  };

  this.sort = () => {
    var stack2 = new Stack();

    if (this.isEmpty()) {
      return false;
    };

    while (!this.isEmpty()) {
      if (stack2.isEmpty()) {
        stack2.add(this.pop());
      } else {
        var nextVal = this.pop();
        var reverseMe = 0;

        if (nextVal >= stack2.peek()) {
          stack2.add(nextVal);
        } else {

          while (nextVal < stack2.peek()) {
            this.add(stack2.pop());
            reverseMe++
          }
          stack2.add(nextVal);
          while (reverseMe > 0) {
            stack2.add(this.pop());
            reverseMe--;
          };
        } 
      };
    };
    this.container = stack2;
  };

};


// var stacko = new Stack();

// stacko.add(9);
// stacko.add(1);
// stacko.add(10);
// stacko.add(0);
// stacko.add(300);
// stacko.add(8);
// stacko.add(9);
// stacko.add(10);

// stacko.sort();

// console.log(stacko.pop());
// console.log(stacko.pop());
// console.log(stacko.pop());
// console.log(stacko.pop());
// console.log(stacko.pop());
// console.log(stacko.pop());
// console.log(stacko.pop());
// console.log(stacko.pop());
