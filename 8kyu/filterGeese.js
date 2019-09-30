var birdsArr = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher","test1", "test2"];


function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(b => !geese.includes(b));
};

console.log(gooseFilter(birdsArr));
