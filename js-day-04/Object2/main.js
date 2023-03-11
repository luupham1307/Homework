function takesOject(obj) {
    Object.keys(obj);
    var arr = []
    for (var key in obj) {
        console.log(key);
        arr.push(obj[key])
    }
    return arr;
}
var byMe = {
    myName: "Luu",
    myAge: "25",
}
var check = takesOject(byMe);
console.log(check);


