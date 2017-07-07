var checkPermutation = (string1, string2) => {
  var objA = {};
  var objB = {};



  if (string1.length !== string2.length) {
    return false;
  } else {
    for (var i = 0; i < string1.length; i++) {
      if (string2.indexOf(string1[i]) === -1) {
        return false;
      }

      if (!objA[string1[i]]) {
        objA[string1[i]] = 1;
      } else objA[string1[i]] += 1;

      if (!objB[string2[i]]) {
        objB[string2[i]] = 1;
      } else objB[string2[i]] += 1;
    };
  }

  for (char in objA) {
    if (objA[char] !== objB[char]) {
      return false;
    }
  }

  return true;
}

console.log(checkPermutation('abc', 'bac'))
console.log(checkPermutation('bbcaaaab', 'bbcaabaa'))
console.log(checkPermutation('abc', 'bacd'))
console.log(checkPermutation('abbbbbbc', 'bbcaaaaa'))