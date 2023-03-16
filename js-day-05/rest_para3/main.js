function concatenate(separator, ...str) {
    // console.log(str);
    // console.log(separator)
    return str.join(separator);
}
console.log(concatenate("-", "l", "u", "u"))