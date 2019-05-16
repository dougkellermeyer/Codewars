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
    var splitRepeatLetters = repeatLetters.toString().split("")
    var stringSplit = s.split("")

    for(let i = 0; i < stringSplit.length; i++){
        for (let j = 0; j < splitRepeatLetters.length; j++){
        //when a letter in the string (s) != the repeated letter, slice it out and return it
          if(stringSplit[i] !== splitRepeatLetters[j]){

              var noRepeat = stringSplit.slice(1,2) // 't'
            }
        }
    }
    return s.length === splitRepeatLetters.length ? "None" : noRepeat.toString()
    }
}

console.log(firstNonRepeatingLetter('stress'))