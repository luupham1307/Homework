function removeNullAndUndefined(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    var newObj = {};

    for (var [key, value] of Object.entries(obj)) {
        if (value !== null && value !== undefined) {
            newObj[key] = removeNullAndUndefined(value);
        }
    }

    return newObj;
}

//ex
var obj = {
    myName: "Luu",
    myAge: 25,
}
// var obj2 = {
//     yourName: "Trang",
//     yourAge: "27",
// }
var check = removeNullAndUndefined(obj);
console.log(check);


