var numArray = [1, 2, 3, 4, "string", function(){}];


function multiplyAndFilter(arr, multi){
    //map the array with the multiplier then filter the results for just numeric
    return arr.filter((el) => typeof el === "number").map((x) => x * multi)
};

console.log(multiplyAndFilter(numArray, 1.5));