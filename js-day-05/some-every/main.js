//ex1
let arr = [1, 3, 5, 6, 9];
let checkElement = arr.some(num => num % 2 === 0);
console.log(checkElement); // Output: true

//ex2
let arr2 = [1, 3, 5, 7, 9];
let checkElement2 = arr2.every(num => num % 2 !== 0);
console.log(checkElement2); // Output: true

//ex3
let arr3 = ['apple', 'banana', 'cherry'];
let checkElement3 = arr3.some(str => str.length > 5);
console.log(checkElement3); // Output: true

//ex4
let arr4 = ['apple', 'banana', 'cherry'];
let checkElement4 = arr4.every(str => typeof str === 'string');
console.log(checkElement4); // Output: true

//ex5
let arr5 = [
    { name: 'Alice', age: 30 },
    { age: 40 },
    { name: 'Bob', age: 50 },
];

let checkName = arr5.some(obj => 'name' in obj);
console.log(checkName); // Output: true

