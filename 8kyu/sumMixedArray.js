arr = [9,2, '1','2']

function sumMix(a){
    var stringNumsArray = [];
    for(i=0; i < a.length; i++){
        stringNumsArray.push(parseInt(a[i],10))
    }
    return stringNumsArray.reduce((acc,curr) => acc+curr);
}

sumMix(arr);

const sumMix2 = arr=>arr.reduce((a,b)=>+b+a,0)

console.log(sumMix2)