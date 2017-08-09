//i

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

  list.printAllValues = () => {
    var currentNode = list.head;
    var stopLimit = 20;
    var count = 0;
    while (currentNode && count < stopLimit) {
      if (currentNode) {  
        console.log(currentNode.value);
      }
      currentNode = currentNode.next;
      count +=1;
    }
  }

  list.createLoopAtIndex = index => {
    var count = 0;
    var currentNode = list.head;

    while (count < index && currentNode.next) {
      count+=1;
      currentNode = currentNode.next;
    }
    list.tail.next = currentNode;

  }

  list.loopDetection = () => {
    var n = 0;
    var runner1 = list.head;
    var runner2 = list.head;

    while (runner1 && runner2) {
      if (runner1 === runner2) {
        return n;
      } else {
        runner1 = runner1.next;
        runner2 = runner2.next.next;
      }

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

list.addToTail('1');
list.addToTail('2');
list.addToTail('3');
list.addToTail('4');
list.addToTail('5');

list.createLoopAtIndex(2);

list.printAllValues();







