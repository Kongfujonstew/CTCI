
var oneAway = (string1, string2) => {
  var arr1 = string1.split('');
  var arr2 = string2.split('');
  var longest = (arr1.length - arr2.length) >= 0 ? arr1 : arr2;
  var shortest = (arr1.length - arr2.length) >= 0 ? arr2 : arr1;
  var lengthDiff = Math.abs(arr1.length - arr2.length);

  if (lengthDiff > 1) {
    return false;
  } if (lengthDiff === 1) {
    for (var i = 0; i < longest.length; i++) {
      if (longest[i] !== shortest[i]) {
        var newArr = addOneAtCurrent(longest, shortest, i);
        return checkArraysSame(arr1, newArr);
      }
    }
  } else if (lengthDiff === 0) {
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        var newArr = replaceCurrent(arr1, arr2, i);
        return checkArraysSame(arr1, newArr);
      }
    }
  }
}

var checkArraysSame = (arr1, arr2) =>   {
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

var addOneAtCurrent = (arr1, arr2, i) => {
  arr2.splice(i, 0, arr1[i]);
  return arr2;
}

var replaceCurrent = (arr1, arr2, i) => {
  arr2[i] = arr1[i];
  return arr2;
} 


console.log(oneAway('cc', 'c'));
console.log(oneAway('cc', 'dd'));
console.log(oneAway('cd', 'cc'));


