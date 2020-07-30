const findOddNum = (arr) => {
    let count = {};
    let oddNum;
    for(let i = 0; i < arr.length; i++){
        let n = arr[i];
        count[n] = count[n] ? count[n] + 1 : 1;
    };

    //return the key that has an odd value
    Object.values(count).map(c => {
        if(c % 2 !== 0){
            oddNum = Object.keys(count).find(key => count[key] === c)
        } 
    });

    return parseInt(oddNum, 10);
};

console.log(findOddNum([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));

//alternate solution 
function findOdd(arr) {
    return arr.find((item, index) => arr.filter(el => el == item).length % 2)
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))