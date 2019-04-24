// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, and u as vowels for this Kata.

// The input string will only consist of lower case letters and/or spaces.

function countVowels(str){
    return str.match(/[aeiou]/g).length
}

console.log(countVowels("the dog runs down the street"))