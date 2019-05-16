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
    var splitRepeatLetters = repeatLetters.join("").split("")
    var stringSplit = s.split("")

    var noRepeat = [];

    for(let i = 0; i < stringSplit.length; i++){
        for (let j = 0; j < splitRepeatLetters.length; j++){
          if(stringSplit[i] !== splitRepeatLetters[j]){
              let idxStart = stringSplit.indexOf(stringSplit[i])
              let idxEnd = stringSplit.indexOf(stringSplit[i+1])
              console.log(idxStart,idxEnd)

              noRepeat.push(stringSplit.slice(idxStart,idxEnd))
            }
        }
    }
    return s.length === splitRepeatLetters.length ? "None" : noRepeat.toString()
    }
}

console.log(firstNonRepeatingLetter('moonmen'))