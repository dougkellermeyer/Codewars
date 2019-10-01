mixedNumArray = [1, 2, 3, 4];

function getEvenNumbers(numArray){
    return numArray.filter((el) => el % 2 === 0);
};

console.log(getEvenNumbers(mixedNumArray));