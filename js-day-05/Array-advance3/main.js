let arr = [1, 2, 3, 4, 5];
arr.forEach(function (element, index, array) {
    array[index] = element * 2;
    // console.log(array[index])
});

console.log(arr); // Output: [2, 4, 6, 8, 10]
