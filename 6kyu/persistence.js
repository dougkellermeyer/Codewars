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
    
        var numStr = num.toString()
        var numArray = [] //[1,2]

        for(let i = 0; i < numStr.length; i++){
            numArray.push(+numStr.charAt(i));
        }

        var reduceArray = numArray.reduce((acc, curVal) => {
            return acc * curVal
        })

        tmp = reduceArray.toString()
        console.log(tmp.length)
        if (tmp.length === 1){
            console.log("equal to 1")
        }else {
            console.log("more than 1 digit")
            var numArray2 = [] 

            for(let j = 0; j < tmp.length; j++){
                numArray2.push(+tmp.charAt(j));
            }
        }
    }
}

persistence(99) //1