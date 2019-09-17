arr = [9,2, '1','2']

// function sumMix(a){
//     var stringNumsArray = [];
//     for(i=0; i < a.length; i++){
//         stringNumsArray.push(parseInt(a[i],10))
//     }
//     return stringNumsArray.reduce((acc,curr) => acc+curr);
// }



//refactor using reduce instead of loop
function sumMix(a){
    return a.reduce((acc,curr) => acc+ +curr, 0);
}

console.log(sumMix(arr));