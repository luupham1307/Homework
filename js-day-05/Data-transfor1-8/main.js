// ex1
let arr = [1, 2, 3, 4, 5];

let newArr = arr.map(function (element) {
    return element * 2;
});

console.log(newArr); // Output: [2, 4, 6, 8, 10]


//ex2
let arr2 = [1, 2, 3, 4, 5]
let evenArr = arr2.filter((num) => {
    return num % 2 === 0
})
console.log(evenArr)


//ex3
let arr3 = [1, 2, 3, 4, 5]

const sum = arr3.reduce(function (addToTotal, element) {
    return addToTotal + element
})
console.log(sum)

//ex4

let arr4 = [1, 2, 3, 4, 5];
let squareArr4 = arr.map(function (num) {
    return num * num
}
);
console.log(squareArr4); // Output: [1, 4, 9, 16, 25]

//ex5
let arr5 = [1, 2, 3, 4, 5];
let greaterThanTwoArr = arr5.filter(num => num > 2);
console.log(greaterThanTwoArr); // Output: [3, 4, 5]

//ex6

let arr6 = [1, 2, 3, 4, 5]
let product = arr6.reduce(function (addProduct, element) {
    return addProduct * element
})
console.log(product)

//ex7

let arr7 = ['apple', 'banana', 'cherry']
let newLength = arr7.map(function (addNewLength) {
    return addNewLength.length
})
console.log(newLength)

//ex8
let arr8 = ['apple', 'banana', 'cherry']
let newLength8 = arr8.filter(function (num8) {
    return num8.length > 5
})
console.log(newLength8)