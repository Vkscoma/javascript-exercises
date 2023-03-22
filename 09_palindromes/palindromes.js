const palindromes = function (string) {
    const palindromeString = string.toLowerCase().split('');
    const palindromeStringFiltered = palindromeString.filter((char) => {
        return char.match(/[a-z]/);
    });
    const palindromeStringReversed = palindromeStringFiltered.slice().reverse();
    return palindromeStringFiltered.join('') === palindromeStringReversed.join('');
};

// Do not edit below this line
module.exports = palindromes;
