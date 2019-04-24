// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers. No floats or empty arrays will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

var num = [-50,1,2,-2,-1,-5,-7]

function sumTwoSmallestNumbers(numbers) {  
    //lets grab just the positive numbers
    const posNum = numbers.filter(function(number){
        return number >= 0;
    });
    //now lets sort them 
    const numOrdered = posNum.sort(function(a,b){
        return a-b
    }); 
    //finally lets add the two smallest numbers
    return numOrdered[0] + numOrdered [1];
    
};

console.log(sumTwoSmallestNumbers(num));