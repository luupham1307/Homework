// dữ liệu 2
var dolphinsAvg = calcAverage(85, 54, 41);
var koalasAvg = calcAverage(23, 34, 27);


function calcAverage(a, b, c) {
    return (a + b + c) / 3
}
function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win ${avgDolphins} với ${avgKoalas}`)
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win ${avgDolphins} với ${avgKoalas}`)
    } else {
        console.log("not win")
    }
}

checkWinner(dolphinsAvg, koalasAvg);





