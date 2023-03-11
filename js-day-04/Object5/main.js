function twoOject(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}
//ex
var obj1 = {
    myName: "Luu",
    myAge: 25,
}
var obj2 = {
    yourName: "Trang",
    yourAge: 27,
}
var check = twoOject(obj1, obj2);
console.log(check);


