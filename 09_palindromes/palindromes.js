const palindromes = function (paramWord) {

    paramWord = filter(paramWord);

    return evenPalindrome(paramWord);

};

const evenPalindrome = function(localWord) {
    for(let i = 0; i < localWord.length/2; i++) {
        if(localWord[i] != localWord[localWord.length-1-i]) {
            return false;
        }
    }

    return true;
}

const filter = function(localWord) {
    let finalWord = "";
    Array.from(localWord).forEach(char => {
        if(isLetter(char)) {
            finalWord += char.toLowerCase();
        }
    });
    return finalWord;
}

const isLetter = function (paramChar) {
    return paramChar.toLowerCase() != paramChar.toUpperCase();
}

// Do not edit below this line
module.exports = palindromes;
