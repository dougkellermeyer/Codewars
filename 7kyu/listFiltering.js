function filter_list(list) {
    // Return a new array with the strings filtered out
    var filteredList = list.filter(function(i){
        return typeof i == "number"
    });

    return filteredList // [1,2]
}

list = [1,2,'a','b']

console.log(filter_list(list));