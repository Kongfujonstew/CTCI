var Node = function (value) {
  this.value = value;
  this.connections = [];
  // this.visited = false;
  this.addConnections = (node) => {
    this.connections.push(node);
    node.connections.push(this);
  };

  this.checkRouteBetweenNodes = (nodeOne, nodeTwo) => {
    var nodesList = nodeOne.connections.slice();
    while (nodesList.length) {
      var currentNode = nodesList.shift();
      currentNode.visited = true;
      if (currentNode === nodeTwo) {
        return true;
      } else {
        for (nodeNum in currentNode.connections) {
          let nextNode = currentNode.connections[nodeNum];
          if (!nextNode.visited) {
            nodesList.push(nextNode);
          }
        }
      }
    }
    return false;
  }
};


// var testGraph = new Node('root');
// var A = new Node('A');

// var aa = new Node('aa');
// var bb = new Node('bb');
// var cc = new Node('cc');
// var dd = new Node('dd');
// var ee = new Node('ee');
// var ff = new Node('ff');

// testGraph.addConnections(A);
// A.addConnections(aa);
// A.addConnections(bb);
// A.addConnections(cc);
// A.addConnections(dd);
// A.addConnections(ee);
// A.addConnections(ff);


// var B = new Node('B');

// var zz = new Node('zz');
// var yy = new Node('yy');
// var ww = new Node('ww');
// var xx = new Node('xx');
// var uu = new Node('uu');
// var vv = new Node('vv');

// testGraph.addConnections(B);
// B.addConnections(zz);
// B.addConnections(yy);
// B.addConnections(ww);
// B.addConnections(xx);
// B.addConnections(uu);
// B.addConnections(vv);


// console.log(testGraph.checkRouteBetweenNodes(aa, zz));

