//Complete the function scramble(str1, str2) that returns true if a 
//portion of str1 characters can be rearranged to match str2, 
//otherwise returns false.

function scramble(str1,str2){

    // function removeDuplicates(){
        //make this a funciton to clean strings/array
    // }
    var removeStr2Duplicates = str2
    .split('')
    .filter(function(item, pos, self) {
    return self.indexOf(item) == pos;
    })
    .join('');
    var matchArr = [];
    for(let i = 0; i < str1.length; i++){
        for(let j = 0; j < str2.length; j++){
            if(str1[i] === str2[j]){
                matchArr.push(str1[i])
            }
        }
    }
    var removeDuplicates =  matchArr.join('')
                    .split('')
                    .filter(function(item, pos, self) {
                    return self.indexOf(item) == pos;
                    })
                    .join('');

    return removeDuplicates.split('').sort().join('') === removeStr2Duplicates.split('').sort().join('') ? true : false
}

console.log(scramble('scriptingjava','javascript'))
