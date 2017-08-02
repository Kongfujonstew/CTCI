// Implement three stacks using a single array:


// Plan A:

// Step 1: Make the array sufficiently long so that will accomodate all entries for each stack.
// Step 2: Set array items at indexes 0, 1, and 3 equal to the index of the first/top entry for each stack.
//   For instance, if each array is alotted 100 indexes in the array, those values are 3, 103 and 203
// Step 3: implement add, which puts takes an input array number (n 1 through 3) and an input value
//   and inserts it at the current top of stack, then increments the array top entry (at index n-1) up one
// Step 4: implement delete, which looks up the value and array value stored at index n-1, saves it in a variable, sets it to undefined,
//   increments the top entry down one (stored at index n-1) and returns the saved variable
// Step 5: implement peek: return the array value stored at the index stored at array[n-1]
// Step 6: implement isEmpty, which simply returns a boolean representing whether or not array at index n-1 is equal to 100*(n-1)+3


var Stack = (size) => {
  var container = [];

  // Set stacktop index values
  container.push(3);
  container.push(size+3);
  container.push(2*size+3);

  container.push = (array, value) => {
    console.log('adding ', value, 'at container index: ', container[array-1])
    container[container[array-1]] = value;
    container[array-1] += 1;
  }

  container.pop = (array) => {
    var oldValue = container[container[array-1]];
    container[container[array-1]] = undefined;
    container[array-1] -= 1;
  }

  container.peek = (array) => {
    return container[container[array-1]-1];
  }

  container.isEmpty = (array) => {
    return container[container[array-1]] === size*(array-1)+3;
  }

  container.printFive = (array) => {
    var start = container[array-1]-1;
    console.log('start: ', start)
    for (var i = start; i >= size*(array-1)+3; i--) {
      console.log(container[i])
    }
  }
  return container;
}

// var testStack = Stack(100);


// testStack.push(1,'one');
// testStack.push(1,'two');
// testStack.push(1,'three');
// testStack.push(2,'one');
// testStack.push(2,'two');
// testStack.push(2,'three');

// testStack.printFive(1);

// console.log(testStack.isEmpty(1));

// console.log(testStack.peek(1));

// testStack.pop(1);

// console.log(testStack.peek(1));







