// In this Kata, you will implement the Luhn Algorithm, which is used to help validate credit card numbers.

// Given a positive integer of up to 16 digits, return true if it is a valid credit card number, and false if it is not.

// Here is the algorithm:

// 1. Double every other digit, scanning from right to left, starting from the second digit (from the right).
// 2. If a resulting number is greater than 9, replace it with the sum of its own digits 
//  (which is the same as subtracting 9 from it)
// 3. Sum all the final digits (reduce would work well here)
// 4. Divide the sum by 10, if the remainder = 0 return true, if not then return false

//step 1 completed

function validate(x){
    //double every other index in the array
    var valReturnArray =  firstStep(x)

    function firstStep(n){
        var numArray = n.toString().split("").map(Number)
        return numArray.reverse().map(value => numArray.indexOf(value) % 2 === 0 ? value : value * 2)
    }

        //loop through the array and subtract 9 from anything > 9 
        for(let i = 0; i < valReturnArray.length; i++){
           if(valReturnArray[i] > 9){
            valReturnArray[i]=valReturnArray[i]-=9
           }
        }
        //reduce the array and see if the cc number is valid
        return valReturnArray.reduce((a,b)=>a+b) % 10 === 0 ? true: false
}

console.log(validate([5454])) //true