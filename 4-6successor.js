var Node = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  this.parent = null;

  this.addNodeBST = function(value) {
    var current = this;
    while (current) {
      if (current.value >= value) {
        if (!current.left) {
          current.left = new Node(value);
          current.left.parent = this;
          current = null;
        } else {
          current = current.left;
        }
      } else if (current.value < value) {
        if (!current.right) {
          current.right = new Node(value);
          current.right.parent = this;
          current = null;
        } else {
          current = current.right;
        }
      } 
    }
  }

  this.findSuccessor = (node) => {
    var leftMostChild = (node) => {
      if (node === null) {
        return null;
      }
      while (node.left != null) {
        node = node.left;
      }
      return node;
    }

    if (node === null) {
      return leftMostChild(node.right);
    } else {
      var q = node;
      var x = node.parent;
      while (x != null && x.left != q) {
        q = x;
        x = x.parent;
      }
      return x;
    }
  }
}





