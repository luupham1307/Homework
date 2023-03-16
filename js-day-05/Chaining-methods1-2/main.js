//ex1
//ex1
let arr = [1, 2, 3, 4, 5];
let evenArr = arr.map(num => num * num).filter(num => num % 2 === 0);
console.log(evenArr); // Output: [4, 16]

//ex2

let arr2 = [1, 2, 3, 4, 5];
let evenArr2 = arr2.filter(num => num % 2 === 0).map(num => num * num);
console.log(evenArr2); // Output: [4, 16]
