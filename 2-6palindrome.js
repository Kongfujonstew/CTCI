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

  list.palindrome = () => {
    var valuesArray = [];
    var currentNode = list.head;
    var n = Math.floor(valuesArray.length/2);
    var character;

    while (currentNode) {
      valuesArray.push(currentNode.value);
      currentNode = currentNode.next;
    }

    for (var i = 0; i <= n; i++){
      character = valuesArray[i]
      console.log('character: ', character, 'endvalue: ', valuesArray[valuesArray.length-i-1]);
      if (character !== valuesArray[valuesArray.length-i-1]) {
        return false;
      }
    }
    return true;
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






