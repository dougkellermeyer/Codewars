// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

const acum = (str) => {
    //split string and repeat based on index
    let splitStr = str.toLowerCase().split('')
    let allCapsSplitStr = splitStr.map((letter,idx) => letter.repeat(idx));
    //capitalize first letter of each item and join w/ '-'
    let mumblingStr = allCapsSplitStr.map(letter => letter.slice(0,1).toUpperCase() + letter.slice(1)).join('-');
    return mumblingStr
};

console.log(acum("ZpglnRxqenU"))


//refactored version 

const acum2 = (str) => {
    return str.split('').map((letter, idx) => letter.toUpperCase() + letter.toLowerCase().repeat(idx)).join('-');
}

console.log(acum2("ZpglnRxqenU"))