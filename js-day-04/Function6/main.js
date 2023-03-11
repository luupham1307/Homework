function capitalizeFirstLetter(arr) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        var firstLetter = arr[i][0].toUpperCase();
        var restOfWord = arr[i].slice(1);
        result.push(firstLetter + restOfWord);
    }

    return result;
}

// example usage
var arr = ["luu", "trang", "anh"];
var capitalized = capitalizeFirstLetter(arr);
console.log(capitalized);


