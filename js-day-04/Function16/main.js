function getUniqueStrings(arr) {
    var uniqueArr = [];

    arr.forEach(function (str) {
        if (!uniqueArr.includes(str)) {
            uniqueArr.push(str);
        }
    });

    return uniqueArr;
}
var arr = ["pham", "thi", "hoang", "luu", "pham", "thi"];
var uniqueArr = getUniqueStrings(arr);
console.log(uniqueArr);





