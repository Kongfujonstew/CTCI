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


  list.removeDups = () => {
    var values = {};
    var currentNode = list.head;
    values[currentNode.value] = true;
    while (currentNode && currentNode.next) {
      if (values[currentNode.next.value]) {
        currentNode.next = currentNode.next.next;
      } else {
        values[currentNode.value] = true;
        currentNode = currentNode.next;
      }
    }
  };

  list.contains = target => {
    var currentNode = list.head;
    while (currentNode !== null) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  return list;
};


var Node = value => {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};


