
var TreeNode = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;

  //classic addnode (unused here)
  this.addNode = (value) => {
    var current = this;

    while (!!current) {
      if (current.value < value) {
        if (!current.right) {
          current.right = new TreeNode(value);
          console.log('new node inserted on right!, value: ', current.right.value)
          current = null;
        } else {
          console.log('moving down right, current.value: ', current.value)
          current = current.right;
        }

      } else if (current.value >= value) {
        if (!current.left) {
          current.left = new TreeNode(value);
          console.log('new node inserted on left!, value: ', current.left.value)
          current = null;
        } else {
          console.log('moving down left')
          current = current.left;
        }
      }
    }

  }

}

var MinimalBST = function(array, start, end) {
  this.createMinimalBST = (array, start, end) => {
    if (end < start) {
      return null;
    }
    start = start || 0;
    end = end || array.length-1;

    let mid = Math.floor((start + end)/2);
    let n = new TreeNode(array[mid]);
    console.log('new BST start: ', start, 'end: ', end);
    console.log('mid: ', mid, 'array at mid: ', array[mid])
    n.left = new MinimalBST(array, start, mid-1);
    n.right = new MinimalBST(array, mid+1, end);
    return n;
  }
  this.n = this.createMinimalBST(array, start, end);
}

// var binaryTree = new TreeNode(5);

// binaryTree.addNode(4);
// binaryTree.addNode(6);
// binaryTree.addNode(10);
// binaryTree.addNode(10);
// binaryTree.addNode(1100);

// console.log(binaryTree.right.right.right.value);


var testBSTTree = new MinimalBST([1,2,3,4,5,6]);


