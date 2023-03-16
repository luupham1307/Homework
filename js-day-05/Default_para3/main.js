function calculateArea(length = 1, width = 1) {
    return length * width
}
console.log(calculateArea())

function logNumbers(numbers = []) {
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i])
    }
}