function duplicateCount(text){
    if (text.length > 0) {
        var duplicates = text.toLowerCase().split("").sort().join("").match(/(.)\1+/g)
        return (duplicates === null ? 0 : duplicates.length);
    } return 0
}

console.log(duplicateCount("aabc"))