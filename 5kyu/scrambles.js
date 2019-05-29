//Complete the function scramble(str1, str2) that returns true if a 
//portion of str1 characters can be rearranged to match str2, 
//otherwise returns false.

function scramble(str1,str2){

    var matchArr = [];
    for(let i = 0; i < str1.length; i++){
        for(let j = 0; j < str2.length; j++){
            if(str1[i] === str2[j]){
                matchArr.push(str1[i])
            }
        }
    }

    var strSorted = str2.split('').sort().join('')
    var matchArrSorted = matchArr.join('').split('').sort().join('')

    return matchArrSorted === strSorted ? true : false
}

console.log(scramble('olkpqnksdwr','world'))
