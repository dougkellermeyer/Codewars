dupArr = [1, 2, 3, 3]; 

//return an array of unique characters
const makeUnique = arr => [...new Set(arr)];

console.log(makeUnique(dupArr));

