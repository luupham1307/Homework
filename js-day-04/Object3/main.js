function takesOject(obj) {
    Object.keys(obj);
    var newObject = {}
    for (var key in obj) {
        // console.log(key)  //my name
        // console.log([obj[key]])  //['luu']
        newObject[obj[key]] = key;
        // console.log(newObject[obj[key]]) //myname
        // console.log(key); //nyname
        console.log(newObject)
    }
    return newObject;
}

var byMe = {
    myName: "Luu",
    myAge: 25,
}
var check = takesOject(byMe);
console.log(check);


