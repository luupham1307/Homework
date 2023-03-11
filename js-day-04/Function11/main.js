function sumNumbers(num) {
  var sum = 0;
  for (var i = 0; i < num.length; i++) {
    sum += num[i];
  }
  return sum;
}

// ex
var num = [1, 2, 3, 4, 5];
var a = sumNumbers(num);
console.log(a); // 15