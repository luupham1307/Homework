function checkNumbers(num) {
    var positive = [];
    for (var i = 0; i < num.length; i++) {
        if (num[i] > 0) {
            positive.push(num[i])
        }
    }
    return positive;
}
// example usage
var num = [-1, 2, 3, 0, 4];
const positiveNumbers = checkNumbers(num);
console.log(positiveNumbers); 
