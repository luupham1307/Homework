function sortNumbers(arr) {
  return arr.sort(function (a, b) {
    return a - b;
  });
}

// example usage
var arr = [1, 6, 3, 7, 4];
var sortedArr = sortNumbers(arr);
console.log(sortedArr);