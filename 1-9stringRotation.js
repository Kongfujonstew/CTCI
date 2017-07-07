var stringRotation = (s1, s2) => {

  s1 = s1.split('');
  s2 = s2.split('');


  if (isSubsetOf(s1, s2)) {
    return checkRotations(s1, s2);
  }
  return false;

}

var isSubsetOf = (s1, s2) => {
  var one = {};
  var two = {};

  if (s1.length !== s2.length) {
    return false;
  }

  for (var i = 0; i < s1.length; i++) {
    if (one[s1[i]]) {
      one[s1[i]] += 1;
    } else {
      one[s1[i]] = 1;
    };
    if (two[s2[i]]) {
      two[s2[i]] += 1;
    } else {
      two[s2[i]] = 1;
    }
  }

  for (letter in one) {
    if (one[letter] !== two[letter]) {
      return false;
    }
  }
  return true;
}



var areStringsEqual = (s1, s2) => {
  return s1.reduce(function(memo, character, index) {
    if (character !== s2[index]) {
      console.log('returning false')
      return false;
    } else {
      return true;
    }
  }, true)

}


var checkRotations = (s1, s2) => {
  for (var i = 0; i < s2.length; i++) {
    if (s2[i] === s1[0]) {
      var firstHalf = s2.slice(0,i);
      var secondHalf = s2.slice(i);
      var newString = secondHalf.concat(firstHalf);
      if (areStringsEqual(s1, newString)) {
        return true;
      };
    }

  }

}


console.log(stringRotation('elloh', 'hello'));




