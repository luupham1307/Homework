var type = "banana";
var price;

switch (type) {
    case "banana":
        price = "$0.99";
        break;
    case "apple":
        price = "$0.89";
        break;
    case "orange":
        price = "$0.79";
        break;
    default:
        price = "Invalid type";
}
console.log(price);
/** price.
    "banana"=>"$0.99". If the type is "apple", return "$0.89".
    If the type is "orange", return "$0.79".
    */
