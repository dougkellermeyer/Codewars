//create an array that's length = n and counts starting from 1 
// monkeyCount(10) // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// monkeyCount(1) // --> [1]


function monkeyCount(n){
    var numArray = [];
    for (let i = 1; i <= n; i++){
        numArray.push(i)
    }

    return numArray
};

console.log(monkeyCount(10));