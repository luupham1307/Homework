function twoOject(obj1) {
    var newOject = {}
    for (var key in obj1) {
        if (typeof obj1[key] === "string") {
            newOject[key] = obj1[key].toUpperCase()
        } else {
            newOject[key] = obj1[key]
        }
    }
    return newOject;
}

//ex
var obj1 = {
    myName: "Luu",
    myAge: 25,
}
// var obj2 = {
//     yourName: "Trang",
//     yourAge: "27",
// }
var check = twoOject(obj1);
console.log(check);


