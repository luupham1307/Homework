//ex1
let arr = [1, 2, 3, 4, 5];
let firstElement = arr.find(function (num) {
    return num > 3
});
console.log(firstElement); // Output: 4

//ex2
let arr2 = ['apple', 'banana', 'cherry'];
let firstElement2 = arr2.find(str => str.length > 5);
console.log(firstElement2); // Output: 'banana'

//ex3
let arr3 = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 40 },
    { name: 'John', age: 50 },
];
let firstElement3 = arr3.find(obj => obj.name === 'John');
console.log(firstElement3); // Output: {name: 'John', age: 50}
