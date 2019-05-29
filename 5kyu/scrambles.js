//Complete the function scramble(str1, str2) that returns true if a 
//portion of str1 characters can be rearranged to match str2, 
//otherwise returns false.

function scramble(str1, str2) {
    var array1 = str1.split("").sort();
    var array2 = str2.split("").sort();
    var i = 0;
    for(var x = 0; i < array2.length && x <= array1.length; x++) {
        if(array2[i] === array1[x]) {
            i++;
        }
    }
    return (x <= array1.length);
}

console.log(scramble('cedewaraaossoqqyt', 'codewars'))

