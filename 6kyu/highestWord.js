// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: 
//a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the 
// original string.

// All letters will be lowercase and all inputs will be valid.


function high(x){
  if(x === ''){
    return false
  }else {
    const letters = 'abcdefghijklmnopqrstuvwxyz';


    var splitArray = x.toLowerCase().split(' ')

    letterValues = []

    for(let i = 0; i < splitArray.length; i++){
      letterValues.push(splitArray[i]
                      .split('')
                      .map(l => letters.indexOf(l)+1)
                      .reduce((a,b) => a+b)
      )
    }
    return splitArray[letterValues.indexOf(Math.max(...letterValues))]
  }
}

console.log(high(""))

