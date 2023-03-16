function sum(...num) {
    let total = 0;
    for (let i of num) {
        total = total + i
    }
    return total
}

// for (let i = 0; i < num.length; i++) {
//     total = total + num[i]
// }
// return total

//ex
console.log(sum(1, 2, 3, 1))
