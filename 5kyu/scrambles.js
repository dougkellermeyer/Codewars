//Complete the function scramble(str1, str2) that returns true if a 
//portion of str1 characters can be rearranged to match str2, 
//otherwise returns false.

function scramble(str1,str2){
    //rmemove nonmatching letters
    if (str1.length && str2.length > 0) {
        var strJoin = str1.concat(str2)
        var duplicates = strJoin.toLowerCase().split("").sort().join("").match(/(.)\1+/g)
        return (duplicates === null ? 0 : duplicates);
    } return 0;

    //compare to str2

}

console.log(scramble('rkqodlw','world'))