var stringCompression = (string) => {
  var resultString = '';
  var i = 0;
  var n = 1;

  while (i < string.length) {
    if (checkRepeat(string, i)) {
      n++
      i++;
    } else {
      resultString = resultString + string[i] + n;
      n = 1;
      i++;
    }
    console.log('resultString: ', resultString);
  }
  return resultString.length > string.length ? string : resultString;
}


var checkRepeat = (string, i) => {
  if (string[i] === string[i+1]) {
    return true;
  } else {
    return false;
  }
}


console.log(stringCompression('aaaaZZZZZZZbc'))

