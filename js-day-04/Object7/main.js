function twoOject(obj1, factor) {
    var newOject = {}
    for (var key in obj1) {
        if (typeof obj1[key] === "number") {
            newOject[key] = obj1[key] * factor
        } else {
            newOject[key] = obj1[key]
        }
    }
    return newOject;
}
//ex
var byMe = {
    myName: "Luu",
    myAge: 25,
}
// var obj2 = {
//     yourName: "Trang",
//     yourAge: "27",
// }
var check = twoOject(byMe, 2);
console.log(check);
