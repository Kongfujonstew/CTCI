var LinkedList = () => {
  var list = {};
  list.head = null;
  list.tail = null;
  

  list.addToTail = value => {
    var newNode = Node(value);
    if (list.tail) {
      list.tail.next = newNode; 
      list.tail = newNode;
    } else {
      list.head = newNode;
      list.tail = newNode;
    }
  };

  list.addToHead = value => {
    var newNode = Node(value);
    if (list.head) {
      newNode.next = list.head;
      list.head = newNode;
    } else {
      list.head = newNode;
      list.tail = newNode;
    }
  }


  list.removeHead = () => {
    var oldHeadValue = list.head.value;
    var oldHead = list.head;
    list.head = oldHead.next;
    oldHead.next = undefined;
    return oldHeadValue;
  };

  //shorten me
  
  list.partition = value => {
    var currentNode;
    if (list.head) {
      currentNode = list.head;
    }
    var passedValue = currentNode.value === value ? true : false;

    while (currentNode.value > value) {
      console.log('moving head to tail')
      list.addToTail(currentNode.value);
      list.head = currentNode.next;
      currentNode = currentNode.next;
      passedValue = true;
    }

    while (currentNode) {
      console.log('while loop entered:', currentNode.value)

      if (currentNode.next && currentNode.next.value === value) {
        console.log('passed Value')
        passedValue = true;
      };

      if (currentNode.next && currentNode.next.value < value && passedValue) {
        console.log('adding to head currentNode.next.value: ', currentNode.next.value)
        list.addToHead(currentNode.next.value);
        currentNode.next = currentNode.next.next;
      };

      if (currentNode.next && currentNode.next.value > value && !passedValue){
        console.log('adding to tail currentNode.next.value: ', currentNode.next.value)
        list.addToTail(currentNode.next.value);
        currentNode.next = currentNode.next.next;
      };
      currentNode = currentNode.next;
    }
    return list;
  }

  return list;
};


var Node = value => {
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};

var list = LinkedList();

list.addToTail(9)
list.addToTail(9)
list.addToTail(5)
list.addToTail(1)

console.log(list)

list.partition(5);

console.log(list);

