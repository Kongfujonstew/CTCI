var zeroMatrix = (matrix) => {
  var rows = {};
  var columns = {};

  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        rows[i] = true;
        columns[j] = true;
      }
    }
  }

  for (row in rows) {
    var newArr = matrix[row].map(function() {
      return 0;
    })
    matrix[row] = newArr;
  };

  for (column in columns) {
    for (row in matrix) {
      matrix[row][column] = 0;
    }
  }

  console.log(matrix);
  return matrix

}




var matrix = [
  [1,2,6,0],
  [1,2,4,5],
  [1,9,3,5],
  [1,2,6,5],
];


zeroMatrix(matrix);