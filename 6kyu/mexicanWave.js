// 1.  The input string will always be lower case but maybe empty.

// 2.  If the character in the string is whitespace then pass over it as if 
//it was an empty seat.

// Example:
//wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

function wave(string) {
    const waveArray =[];

    //lets split the string so we can utilzie array methods
    const splitString = string.split("") // [ 'h', 'e', 'l', 'l', 'o' ]
  
    //loop through the array, making each index capitalized
    for(i = 0; i < splitString.length; i++){
        if(splitString[i] === ' ') {continue}
        let tmp = splitString.slice()
        tmp[i] = tmp[i].toUpperCase()

        waveArray.push(tmp.join(''))
    }
    
    return waveArray;
}

console.log(wave("two words"));