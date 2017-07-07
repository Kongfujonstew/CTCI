var rotateMatrix = (matrix) => {
  var result = [];
  var N = matrix.length;

  for (var i = 0; i < N; i++) {
    var newRow = [];
    for (var j = 0; j < N; j++) {
      newRow.push(matrix[j][i]);
    }
    result.push(newRow);
  }
  return result;

}



var matrix = [
  ['a', 'b', 'c', 'd'],
  ['a', 'b', 'c', 'd'],
  ['a', 'b', 'c', 'd'],
  ['a', 'b', 'c', 'd']
]

console.log(rotateMatrix(matrix));