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
  };

  list.intersection = (listB) => {
    var currentNode = list.head;
    var currentNodeB = listB.head;
    var listArray = [];

    var checkListArrayForNode = (node) => {
      for (var i = 0; i < listArray.length; i++) {
        if (listArray[i] === node) {
          return true;
        }
      }
    }

    while (currentNode) {
      listArray.push(currentNode);
      currentNode = currentNode.next;
    }

    while (currentNodeB) {
      checkListArrayForNode(currentNodeB);
      currentNodeB = currentNodeB.head;
    }

  }

  return list;
}


var Node = value => {
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};


var list = LinkedList();

list.addToTail('h');
list.addToTail('h');
list.addToTail('a');
list.addToTail('h');
list.addToTail('h');

console.log(list.palindrome())  ;






