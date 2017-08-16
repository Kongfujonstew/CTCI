var Node = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;

  this.validateBST = function() {
    var nodes = [this];
    while (nodes.length) {
      var currentNode = nodes.shift();
      console.log('starting, value: ', currentNode.value);
      var value = currentNode.value;
      var left = currentNode.left;
      var right = currentNode.right;

      if (left) {
        if (left.value >= value) {
          console.log('returning false on value: ', value, 'and left.value: ', left.value);
          return false;
        } else {
          nodes.push(left);
        }
      }

      if (right) {
        if (right.value < value) {
          console.log('returning false on value: ', value, 'and right.value: ', right.value);
          return false;
        } else {
          nodes.push(right);
        }
      }

    }
    return true;
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
    // console.log(value);
    var nodes = [this];
    while (nodes.length) {
      var currentNode = nodes.shift();
      if (currentNode.left && currentNode.right) {
        nodes.push(currentNode.left);
        nodes.push(currentNode.right);
      }
      if (!currentNode.left) {
        currentNode.left = new Node(value);
      }
      if (currentNode.left && !currentNode.right) {
        currentNode.right = new Node(value);
      }
    }
  }
}

var testNodeBST = new Node(10);
testNodeBST.addNodeBST(6);
testNodeBST.addNodeBST(8);
testNodeBST.addNodeBST(69);
testNodeBST.addNodeBST(5);
testNodeBST.addNodeBST(3);
testNodeBST.addNodeBST(23);
testNodeBST.addNodeBST(1);

console.log(testNodeBST.validateBST());


// var testNode = new Node(10);
// testNode.addNode(5);
// testNode.addNode(1451);
// testNode.addNode(120);
// testNode.addNode(110);
// testNode.addNode(4);
// testNode.addNode(140);
// testNode.addNode(6);
// testNode.addNode(100);
// testNode.addNode(130);
// testNode.addNode(1450);


// console.log(testNode.validateBST());


