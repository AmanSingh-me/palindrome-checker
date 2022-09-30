const textArea = document.querySelector('textarea');
const btnCheckPalindrome = document.querySelector('.button');
const displayPalindrome = document.querySelector('.palindrome-words');

textArea.addEventListener('input', () => displayPalindrome.textContent = "");

btnCheckPalindrome.addEventListener('click', () => {
    let inputWords = textArea.value.replace(/\s\s+/g, ' ').trim();
    // let regEx = /^[-\w\s]+$/;  // for alphanumeric characters
    if (inputWords.length <= 1 ) return;
    checkPalindrome(inputWords)
});

function checkPalindrome(INPUT_WORDS) {
    let inputWordsArr = INPUT_WORDS.split(' ');

    let palindromeWords = inputWordsArr.filter((word) => {
        if (word.length <= 1) return;
        let reversedWord = word.split('').reverse().join('');
        if (word === reversedWord) return word;
    })

    showPalindromeWords(palindromeWords);
}

function showPalindromeWords(PALINDROME_WORDS) {
    displayPalindrome.textContent = PALINDROME_WORDS;
}