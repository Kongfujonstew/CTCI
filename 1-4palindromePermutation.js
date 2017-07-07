
// var palindromePermutation = (string) => {
//   var newString = string.replace(/\s+/g, '').split('');
//   permuteString(newString, '');
//   return true;
// }



// var checkPalindrome = (string) => {
//   if (string.length % 2 === 0) {
//     console.log('even string run');
//     for (var k = 0; k < string.length/2-1; k++) {
//       if (string[k] !== string[string.length-1-k]) {
//         return false;
//       }
//     }
//   }

//   if (string.length % 2 !== 0) {
//     console.log('odd string run');
//     for (var l = 0; l < (string.length-1)/2-1; l++) {
//       if (string[l] !== string[string.length-1-l]) {
//         return false;
//       }
//     }
//   }
// }


// var permuteString = (stringArray, snippet) => {

//   if (snippet.length >= stringArray.length) {
//     console.log('testing following snippet: ', snippet)
//     checkPalindrome(snippet);
//   } else {
//     for (var j = 0; j < stringArray.length; j++) {
//       console.log('stringArray: ', stringArray, 'snippet: ', snippet, 'j: ', j);
//       snippet += stringArray[j];
//       permuteString(stringArray, snippet);

//     }

//   }

// }




// console.log(palindromePermutation('te'));



// var printEveryCombo = (word) => {


//   var addAChar = (word, snippet) => {
//     var wordo = word.slice()
//     var stack = [];


//     if (word.length === snippet.length) {
//       console.log(snippet);
//     } else {
//       for (var i = 0; i < wordo.length; i++) {
//         var x = wordo.splice(i, 1);
//         stack.push(x);
//         addAChar(word, newSnippet);
//         stack.pop();
//         data.splice(i,0,x);
//       }
//     }

//   }
//   addAChar(word, '');
// }


// console.log(printEveryCombo('abc'));


//STACK OVERFLOW CREATION OF ALL PERMUTATIONS:


function permutation(a){

  let res = [];
  for (let i=0; i<a.length; i++){
    let restA = a.slice(0,i).concat(a.slice(i+1));
    let rest = permutation( restA);
    if(rest.length === 0){
      res.push([a[i]]);
    } else {
      for (let j=0; j<rest.length; j++) {
        res.push([a[i]].concat(rest[j]));
      }
    }
  }
  return res;
}



// var permo = (a) => {
//       for(let i=0; i<a.length; i++){
//         let restA = a.slice(0,i).concat(a.slice(i+1));
//         console.log(restA);
//       }
// }



permo('dogsled');