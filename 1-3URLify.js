var URLify = (string) => {
  var arr = string.split(' ');
  var newArr = arr.map((word, i) => {
    if (i === arr.length-1) {
      return word;
    } else {
      return word + '%20';
    }
  })
  return newArr.join('');
}

console.log('testing')
console.log(URLify('jon is the best'))