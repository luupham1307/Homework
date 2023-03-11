function takesOject(obj) {
    return Object.keys(obj).length
}

var byMe = {
    myName: "Luu",
    myAge: 25,
}
var check = takesOject(byMe);
console.log(check);


