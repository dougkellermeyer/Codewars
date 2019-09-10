const arr1 = [2,10,9,3];

function isNice(arr){
    for(let i = 0; i < arr.length; i++){
        //take each element in the array, see if adding or subtracting 1 is equal to another index in the array
        for(let j = 0; j < i; j++){
            console.log((Math.abs(arr[i] - arr[j])))
        }
    };
};

console.log(isNice(arr1));

//something like this...

// function isNice(arr){
//     var counter = 0
//     for(var i = 0; i < arr.length; i++) {
//         if (arr.includes(arr[i] - 1) || arr.includes(arr[i] + 1)) counter ++
//     }
//     if (counter == arr.length && arr.length != 0) return true
//     return false
// }