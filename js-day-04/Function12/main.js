function findLongestString(arr) {
  var long = '';
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > long.length) {
      long = arr[i];
    }
  }
  return long;
}

// ex
var arr = ['pham', 'thi', 'hoang', 'luu'];
var longestString = findLongestString(arr);
console.log(longestString);






