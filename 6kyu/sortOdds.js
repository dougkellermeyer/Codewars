// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

//Example
// sortArray([5,3,2,8,1,4]) => [1,3,2,8,5,4]

function sortArray(arr){
    //sort the odd ones but retain the postion of evens
    if(arr.length === 0 || arr === null){
        return arr
    }
    
    //lets figure out which ones are odd
    let oddArr = []

    const odds = arr.filter(num => num % 2 !== 0)
    return odds.sort()

    //need to return the sorted add numbers back to the original array

}

console.log(sortArray([5,3,2,8,1,4]))