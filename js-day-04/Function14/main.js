function getLongWords(arr, length) {
  var longWords = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > length) {
      longWords.push(arr[i]);
    }
  }
  return longWords;
}

// example usage
var arr = ["pham", "thi", "hoang", "luu"];
var longWords = getLongWords(arr, 4);
console.log(longWords);





