// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
    //lets split up the string so we can get the length of each word
    var splitS = s.split(" ");

    //now lets sort the array by length of each item with the .sort() method
    splitS.sort(function(a,b){
        return a.length - b.length; //do it lets already
    });

    //finally, let return the length of the shortest word, which will just be the first item in the splitS 
    return splitS[0].length; 

}

console.log(findShort("lets do it already"));