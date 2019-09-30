var birdsArr = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    for(let i = 0; i < birds.length; i++){
        for(let j = 0; j < geese.length; j++){
            if(birds[i] === geese[j]){
                birds.splice(birds.indexOf(birds[i]), 1)
            }
            else {continue}
        }
    }
    return birds;
    // return an array containing all of the strings in the input array except those that match strings in geese
  };

console.log(gooseFilter(birdsArr));