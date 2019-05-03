// Write a function, persistence, that takes in a positive parameter num and 
//returns its multiplicative persistence, which is the number of times you 
//must multiply the digits in num until you reach a single digit.

// For example:
//  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                            // and 4 has only one digit

const persistence = (num) => {
    //check to see if num is 2 digits, if not return zero
    if(num < 9 ) return 0;
    //feed num into for loop
    for (var i = 0; num > 9; i++) {
        //make num a string, then an array of the 'digits'
        //now reduce the array, if num is still 2+ digits (>9), loop again
        num = String(num).split('').reduce((a, b) => b * a,1);
    }
    //return the number of iterations it took to get the num product to one digit
    return i;
}

console.log(persistence(999)) //4 (9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, 1*2 = 2)

