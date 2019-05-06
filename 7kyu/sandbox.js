numArray = [1,2,3]

var arrayProduct = numArray.reduce((acc, curVal) => {
    return acc * curVal
})

console.log(arrayProduct);

