function toLowercase(arr) {
  var lower = []
  for (var i = 0; i < arr.length; i++) {
    lower.push(arr[i].toLowerCase())
  }
  return lower
}

// example usage
var arr = ["PHAM", "THI", "HOANG", "LUU"];
var lowercaseArr = toLowercase(arr);
console.log(lowercaseArr);




