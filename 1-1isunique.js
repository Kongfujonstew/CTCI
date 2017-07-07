
var isUnique = (num) => {
  var string = num.toString();
  for (var i = 0; i < string.length; i++) {
    if (string.lastIndexOf(string[i]) !== i) {
      return false;
    } else {
      continue;
    }
  }
  return true;
}

console.log('hello world')
console.log(isUnique(144) === false);
console.log(isUnique(117) === false);
console.log(isUnique(132) === true);
console.log(isUnique(123456789) === true);