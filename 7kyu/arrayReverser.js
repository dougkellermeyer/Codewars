//Given an array of strings, reverse them and their order in such way that their length stays the same as the length of the original inputs.

//Ex. 
//Input:  {"I", "like", "big", "butts", "and", "I", "cannot", "lie!"}
//Output: {"!", "eilt", "onn", "acIdn", "ast", "t", "ubgibe", "kilI"}

const ultimateReverse = s => {
    //put into array of string object and then reverse every letter in string
        
    let splitReverse = s.join('').split('').reverse().join('')

    sLength = [];

    for (let i = 0; i < s.length; i++){
        sLength.push(splitReverse.slice(0, s[i].length))
        splitReverse = splitReverse.slice(s[i].length)
        console.log(splitReverse)
    }
    return sLength;
}

console.log(ultimateReverse(["I", "like", "big", "butts", "and", "I", "cannot", "lie!"]))