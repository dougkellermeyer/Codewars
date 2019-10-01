var birdsArr = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher","test1", "test2"];


function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(brd => !geese.includes(brd));
};

console.log(gooseFilter(birdsArr));
