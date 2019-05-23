// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. 
//For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

var str = "stress"

function groupBy (fn, arr) {
    return arr.reduce((acc, v) => {
      const k = fn(v)
  
      if (acc.hasOwnProperty(k)) {
        acc[k].push(v)
      } else {
        acc[k] = [v]
      }
  
      return acc
    }, {})
  }
  
  function firstNonRepeatingLetter (str) {
    const group = groupBy(x => x.toLowerCase(), str.split(''))
    const keys = Object.keys(group)
    const len = keys.length
  
    for (let i = 0; i < len; i++) {
      const val = group[keys[i]]
  
      if (val.length === 1) {
        return val[0]
      }
    }
  
    return ''
  }

  console.log(firstNonRepeatingLetter(str))