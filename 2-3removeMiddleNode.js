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


  list.removeMiddleNode = (node) => {
    if (list.head === node) {
      list.head = list.head.next;
    } else {
      var currentNode = list.head;
      while (currentNode.next !== node) {
        currentNode = currentNode.next;
      }
      currentNode.next = currentNode.next.next;
    }
  };


  return list;
};


var Node = value => {
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};




