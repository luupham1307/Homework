function countVowels(str) {
    var count = 0;
    var vowels = ['u', 'e', 'o', 'a', 'i'];
    for (var i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}
var str = "luu, pham";
var numVowels = countVowels(str);
console.log(numVowels);





