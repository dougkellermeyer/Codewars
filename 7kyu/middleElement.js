//As a part of this Kata, you need to create a function that when provided 
//with a triplet, returns the index of the numerical element that lies between 
//the other two elements.

//The input to the function will be an array of three distinct numbers 
//(Haskell: a tuple).

const gimme =  (inputArray) => {
    //need to sort the array and grab the middle number
    var copySortArr = inputArray.map(x => x*1).sort((a,b)=>a-b) //[1,2,3]
    var middle = copySortArr[1]
    //find the index of the middle number in the original array
    return inputArray.indexOf(middle)
};

console.log(gimme([5,10,14]))

