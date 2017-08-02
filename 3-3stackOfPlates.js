var Stack = (max) => {
  var container = [[]];

  container.add = (value) => {
    var current = container[container.length-1];
    if (current.length < max) {
      current.push(value);
    } else if (current.length === max) {
      current.push(value);
      container.push([]);
    };
  };

  container.remove = () => {
    // console.log('container[0].length', container[0].length)
    var current = container[container.length-1];
    if (container.length-1 === 0 & current.length === 0) {
      return undefined;
    } else if (current.length === 0) {
      container[container.length-1-1][container[container.length-1].length-1] = undefined;
      container[container.length-1] = undefined;
    } else {
      container[container.length-1][container[container.length-1].length-1] = undefined;
    }
  };

  container.peek = () => {
    var current = container[container.length-1];
    return current[current.length-1]
  };

  container.isEmpty = () => {
    var current = container[container.length-1];
    if (!current && container.length-1 === 0) {
      return true;
    } else {
      return false;
    };
  };

  container.print = () => {
    console.log(container);
  }

  return container;
};

// var testStack = Stack(100);

// var value = 0;
// var count = 0;

// while (count < 19) {
//   testStack.add(value);
//   console.log('value :', value, 'and peek is: ', testStack.peek())
//   value+=1;
//   count+=1;
// };

// console.log('peek after add: ', testStack.peek());
// console.log('now removing . . . ')

// while (count > 0) {
//   testStack.remove(value);
//   value-=1;
//   count-=1;
// };


// while (count >= 0) {
//   testStack.remove(value);
//   value-=1;
//   count-=1;
// };

// console.log('peek after remove: ', testStack.peek());


