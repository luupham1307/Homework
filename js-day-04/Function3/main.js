function oddNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            sum += numbers[i];
        }
    }
    return sum;
}

// example usage
const numbers = [1, 2, 3, 4, 5];
const sumOfOdds = oddNumbers(numbers);
console.log(sumOfOdds); // 9 (1 + 3 + 5)


