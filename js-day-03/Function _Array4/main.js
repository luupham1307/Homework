var populations = [99, 6, 1441, 338]
console.log(populations.length === 4)

function percentageOfWorld1(populations) {
    return populations / 7900 * 100;
}

var percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])]
console.log(percentages)




