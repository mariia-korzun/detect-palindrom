const detectPalindrome = (str) => {
    if (typeof str !== 'string') {
        return 'Passed argument is not a string'
    }
    if (str.length === 0) { return 'String is empty' }
    return isSubStringPolindrome(str);
}

function isSubStringPolindrome(string) {
    let len = string.length
    if (len <= 1) { return 'This string is palindrome!' }
    if (string[0].toLowerCase() !== string[len - 1].toLowerCase()) {
        return 'This string is not a palindrome!'
    }
    return isSubStringPolindrome(string.slice(1, len-1))
}

module.exports = detectPalindrome;
