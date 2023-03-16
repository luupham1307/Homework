let obj = {
    first: 'John',
    second: 30,
    third: 'male'
};
// console.log(obj.first = "name")
let { first: name, second: age } = obj;
console.log(name);
console.log(age);
