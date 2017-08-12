var checkBalanced = (node) => {
  var result = true;
  var checkDepth = (node) => {
    var onlyOneChild = ((!node.left && node.right) || (!node.right && node.left));
    if (onlyOneChild) {
      var nextNode = node.left ? node.left : node.right;
      if (nextNode.left === null || nextNode.right === null) {
        result = false;
      }
    } else {
      if (node.left) {
        checkDepth(node.left);
      }
      if (node.right) {
        checkDepth(node.right);
      }
    }
  }
  checkDepth(node);
  console.log('returning true on node: ', node.value);
  return result;
};


var Node = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;

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
}


var testNode = new Node(10);
testNode.addNodeBST(5);
testNode.addNodeBST(110);
testNode.addNodeBST(4);
testNode.addNodeBST(6);
testNode.addNodeBST(100);
testNode.addNodeBST(120);
// testNode.addNodeBST(130);
// testNode.addNodeBST(140);
// testNode.addNodeBST(1450);
// testNode.addNodeBST(1451);

console.log(checkBalanced(testNode));
