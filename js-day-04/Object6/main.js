function twoOject(obj1, key) {
    var newOject = Object.assign({}, obj1)
    delete newOject[key];
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
var check = twoOject(obj1, "myName");
console.log(check);


