function getUniqueNumbers(arr) {
    var unique = {};
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (!unique[arr[i]]) {
            unique[arr[i]] = true;
            result.push(arr[i]);
        }
    }
    return result;
}

// ex
var arr = [1, 2, 3, 1, 5, 3];
var uniqueNumbers = getUniqueNumbers(arr);
console.log(uniqueNumbers);


