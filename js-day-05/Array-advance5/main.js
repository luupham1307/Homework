let obj = { a: 1, b: 2, c: 3 };
let sum = 0;

Object.values(obj).forEach(function (value) {
    console.log(value)//1,2,3
    sum += value;
}
);
console.log(Object.values(obj))

console.log(sum); // Output: 6
