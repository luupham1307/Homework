function average(...num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum = sum + num[i]
    }
    return sum / num.length
}
console.log(average(1, 2, 3, 1))
