function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.2;
    }
}
var bills = [125, 555, 44];
var tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills); // [125, 555, 44]
console.log(tips); // [18.75, 111, 8.8]
console.log(totals); // [143.75, 666, 52.8]








