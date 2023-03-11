function reverseStrings(arr) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        var reversedString = arr[i].split("").reverse().join("");
        result.push(reversedString);
    }

    return result;
}

// example usage
var arr = ["luu", "trinh", "anh"];
var reversed = reverseStrings(arr);
console.log(reversed);


