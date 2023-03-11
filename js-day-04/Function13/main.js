function getEvenNumbers(arr) {
  var evenNumbers = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumbers.push(arr[i]);
    }
  }
  return evenNumbers;
}
//ex
var arr = [1, 2, 3, 4, 5];
var evenNumbers = getEvenNumbers(arr);
console.log(evenNumbers);






