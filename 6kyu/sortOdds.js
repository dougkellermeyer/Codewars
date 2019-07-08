// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

//Example
// sortArray([5,3,2,8,1,4]) => [1,3,2,8,5,4]

function sortArray(arr){
    //sort the odd ones but retain the postion of evens
    if(arr.length === 0 || arr === null){
        return arr
    } else{

    //grab the odds from our array
    const odds = arr.filter(num => num % 2 !== 0)

    //sort the odds (using slice so that we don't mutate odds array)
    const oddsSorted = odds.slice().sort((a,b) => a - b)

        //replace the odd indexes of arr with the oddsSorted
        for(i = 0; i < arr.length; i++){
            if(arr[i] % 2 !== 0){
                arr[i] = oddsSorted.shift()
            }else{continue}
        }
        return arr
    }
}

console.log(sortArray([2,22,1,11,4,37,5,0]))