function getLongStrings(arr, length) {
    var check = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > length) {
            check.push(arr[i])
        }
    }
    return check;
}

// ex
var arr = ['luu', 'trinh', 'anh', 'trang'];
const longStrings = getLongStrings(arr, 4);
console.log(longStrings);

