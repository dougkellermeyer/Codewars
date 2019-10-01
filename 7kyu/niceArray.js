const arr1 = [3,4,5,7];

function isNice(arr){
    //count the number of matches, should be equal to the length of the array becuase each number(n) must be equal to n+1 || n-1
    var counter = 0;
    for(let i = 0; i < arr.length; i++){
        //take each element in the array, see if adding or subtracting 1 is equal to another index in the array
        if(arr.includes(arr[i] - 1) || arr.includes(arr[i] + 1)){
            counter++
        }else{
            return false;
        }
    };
    //compare our counter to the arr.length. Check to see if array is empty
    if(counter === arr.length && arr.length != 0){
        return true
    }else {
        return false
    }
};

console.log(isNice(arr1));
