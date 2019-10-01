arr = [9,2, '1','2']

//use unary plus operator in reduce to convert strings to numbers
function sumMix(a){
    return a.reduce((acc,curr) => acc+ +curr, 0);
}

console.log(sumMix(arr));