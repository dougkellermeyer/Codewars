// Write a function, persistence, that takes in a positive parameter num and 
//returns its multiplicative persistence, which is the number of times you 
//must multiply the digits in num until you reach a single digit.

// For example:
//  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                            // and 4 has only one digit

function persistence(num){
    //check to see if the num is >=1
    if (num >=1 && num <= 9){
        return 0;
    } else {
    // put the number into a string, multiply each digit together (forEach or reduce??)
        var numArray = (num.toString().split(''))
        var tmp = numArray.reduce((acc, curVal) => {
            return 
        },0)
    }


    // if > 1, split then multiply and check to see if product is = 1 digit
    return num
}

console.log(persistence(10))