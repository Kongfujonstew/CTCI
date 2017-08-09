var TreeNode = function (value) {
  this.value = value;
  this.left = null;
  this.right = null;


  this.listOfDepths = () => {
    var current = this;
    var depths = [];
    var listo = new LinkedList();

    var createDepthsArray = (node, depth) => {
      console.log('cDA called, node.value: ', node.value, ' depth: ', depth);
      depth = depth || 0;
      if (depth === 0) {
        depths.push([node.value]);
      }
      if (node.left) {
        depths[depth+1] = depths[depth+1] || [];
        depths[depth+1].push(node.left.value);
        createDepthsArray(node.left, depth+1);
      };
      if (node.right) {
        depths[depth+1] = depths[depth+1] || [];
        depths[depth+1].push(node.right.value);
        createDepthsArray(node.right, depth+1);
      };
    }
    createDepthsArray(this);
    console.log(depths);

    for (var i = 0; i < depths.length; i++) {
      listo.addToTail(depths[i]);
    }

    console.log(listo);
  }

  this.addNode = (value) => {
    var current = this;

    while (!!current) {
      if (current.value < value) {
        if (!current.right) {
          current.right = new TreeNode(value);
          current = null;
        } else {
          current = current.right;
        }

      } else if (current.value >= value) {
        if (!current.left) {
          current.left = new TreeNode(value);
          current = null;
        } else {
          current = current.left;
        }
      }
    }
  }
}

var LinkedList = function() {
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
  return list;
}

var Node = value => {
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};


var testTree = new TreeNode(10);
testTree.addNode(1);
testTree.addNode(21);
testTree.addNode(20);
testTree.addNode(30);
testTree.addNode(5);
testTree.addNode(7);
testTree.addNode(3);


testTree.listOfDepths();


