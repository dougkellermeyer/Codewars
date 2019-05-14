// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. 
//For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

function firstNonRepeatingLetter(s) {
    if(s.length <= 1 || s.length === 0){
        return s
    } else {
    var repeatLetters = s.toLowerCase().split("").sort().join("").match(/(.)\1+/g)
    // now that we have the number of repeats, we need to identify the letters that
    // do NOT repeat, and return the first letter
    console.log(repeatLetters)

    //maybe a slice/splice to remove the letters that match?


    return s.length === repeatLetters.toString().length ? "None" : repeatLetters.length
    }
}

console.log(firstNonRepeatingLetter('a'))