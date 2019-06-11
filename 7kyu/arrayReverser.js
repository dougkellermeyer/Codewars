//Given an array of strings, reverse them and their order in such way that their length stays the same as the length of the original inputs.

//Ex. 
//Input:  {"I", "like", "big", "butts", "and", "I", "cannot", "lie!"}
//Output: {"!", "eilt", "onn", "acIdn", "ast", "t", "ubgibe", "kilI"}

const ultimateReverse = s => {
    //put into array of string object and then reverse every letter in string
    
    let splitReverse = s.join('').split('').reverse()

    //need to split the array of strings so that the length matches the lenght of the original items in the array
    
    return splitReverse
}

console.log(ultimateReverse(["I", "like", "big", "butts", "and", "I", "cannot", "lie!"]))