module.exports = function reverse (n) {
    let str = n.toString();
    if (str.startsWith("-")) {
        str = str.substring(1);
    }
    return Number(str.split("").reverse().join(""));
}
