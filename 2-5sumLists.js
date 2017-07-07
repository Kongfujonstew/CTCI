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

  list.sumLists = (list1, list2) => {
    var parseList = (node) => {
      var int = '';
      while (node) {
        console.log('here is the list: ', node)
        console.log('adding ', node.value)
        int += node.value;
        node = node.next;
      }
      console.log('int: ', int)
      return parseInt(int);
    }
    return parseList(list1.head) + parseList(list2.head);
  }

  return list;
};


var Node = value => {
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};






