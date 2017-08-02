var Queue = function () {
  this.inBox = [];
  this.outBox = [];
  this.size = () => {
    return this.outBox.length + this.inBox.length;
  }

  this.add = (value) => {
    this.inBox.push(value);
  };

  this.moveToOutBox = () => {
    if (!this.outBox.length) {
      while (this.inBox.length) {
        this.outBox.push(this.inBox.pop());
      }
    }
  };

  this.peekFirstInLine = () => {
    this.moveToOutBox();
    return this.outBox[this.outBox.length-1];
  };

  this.dequeueFirstInLine = () => {
    this.moveToOutBox();
    return this.outBox.pop();
  };

};


// var testQueue = new Queue();

// testQueue.add(4);
// testQueue.add(5);
// testQueue.add(5);
// testQueue.add(5);
// testQueue.add(5);
// testQueue.add(5);
// testQueue.add(5);
// testQueue.add(5);
// testQueue.add(5);
// testQueue.add(5);
// testQueue.add(5);
// testQueue.add(5);


// console.log('this.inBox:', testQueue.inBox);
// console.log('this.outBox:', testQueue.outBox);
// console.log('fil: ', testQueue.peekFirstInLine());
// console.log('this.inBox:', testQueue.inBox);
// console.log('this.outBox:', testQueue.outBox);
// console.log('dequeue:', testQueue.dequeueFirstInLine());
// console.log('fil2: ', testQueue.peekFirstInLine());

var stringd = {
  mutation: {
    newUser: {
      username: "bob"
    }
  }
};

console.log(JSON.stringify(stringd));
