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


  list.removeHead = () => {
    var oldHeadValue = list.head.value;
    var oldHead = list.head;
    list.head = oldHead.next;
    oldHead.next = undefined;
    return oldHeadValue;
  };


  list.returnKthToLast = (n) => {
    var items = 0;
    var currentNode = list.head;

    while (currentNode) {
      items +=1;
      currentNode = currentNode.next;
    }

    currentNode = list.head;

    while (items > n + 1) {
      if (currentNode.next) {
        console.log(items);
        currentNode = currentNode.next;
        items -=1;
      }
    }
    return currentNode;
  }


  return list;
};


var Node = value => {
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};




