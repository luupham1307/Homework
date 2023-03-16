function filter(array, callback) {
    const filteredArray = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            filteredArray.push(array[i]);
        }
    }
    return filteredArray;
}

// // const myArray = [1, 2, 3, 4, 5];
// // const filteredArray = filter(myArray, (element) => element > 2);
// // console.log(filteredArray);


// const myArray = [1, 2, 3, 4, 5];
// const filteredArray = myArray.filter(function (element) {
//     return element > 2;
// });
// console.log(filteredArray); // Output: [2, 4]

