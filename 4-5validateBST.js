var Node = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;

  this.validateBST = function() {
    var nodes = [this];
    while (nodes.length) {
      console.log('starting, value: ', nodes[0].value);
      var value = nodes[0].value;
      var left = nodes[0].left;
      var right = nodes[0].right;

      console.log('left value: ', left.value, 'right value: ', right.value)
      if (left.value >= value || right.value < value) {
        return false;
      } else {
        left ? nodes.push(left) : null;
        right ? nodes.push(right) : null;
      }
    }

  }

//this is the addNode from previous implementations
  this.addNodeBST = function(value) {
    var current = this;
    while (current) {
      if (current.value >= value) {
        if (!current.left) {
          current.left = new Node(value);
          current = null;
        } else {
          current = current.left;
        }
      } else if (current.value < value) {
        if (!current.right) {
          current.right = new Node(value);
          current = null;
        } else {
          current = current.right;
        }
      } 
    }
  }

//this is a non-BST simple add node implementation
  this.addNode = function(value) {
    var nodes = [this];
    while (nodes.length) {
      var currentNode = nodes.unshift();
      if (currentNode.left && currentNode.right) {
        nodes.push(currentNode.left);
        nodes.push(currentNode.right);
      }
      if (!currentNode.left) {
        currentNode.left = new Node(value);
      }
      if (currrentNode.left && !currentNode.right) {
        currentNode.right = new Node(value);
      }
    }
  }
}

var testNode = new Node(10);
testNode.addNode(5);
testNode.addNode(1451);
testNode.addNode(120);
testNode.addNode(110);
testNode.addNode(4);
testNode.addNode(140);
testNode.addNode(6);
testNode.addNode(100);
testNode.addNode(130);
testNode.addNode(1450);


var testNodeBST = new Node(10);
testNodeBST.addNode(6);
testNodeBST.addNode(8);
testNodeBST.addNode(69);
testNodeBST.addNode(5);
testNodeBST.addNode(3);
testNodeBST.addNode(23);
testNodeBST.addNode(1);

// console.log(testNode.validateBST());
console.log(testNodeBST.validateBST());



