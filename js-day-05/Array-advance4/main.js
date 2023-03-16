let obj = { a: 1, b: 2, c: 3 };

Object.keys(obj).forEach(function (key) {
    // console.log(Object.keys(obj))
    console.log(`${key}: ${obj[key]}`);
});
