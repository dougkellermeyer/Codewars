// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. 
//For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

// let sMap = function(){
//     this.collection = {};
//     this.count = 0;
//     this.size = function(){
//         return this.count;
//     };
//     this.set = function(key, value){
//         this.collection[key] = value;
//         this.count++
//     };
//     this.get = function(key) {
// 		return (key in this.collection) ? this.collection[key] : null;
// 	};
//     this.values = function() {
//         let result = new Array();
//         for (let key of Object.keys(this.collection)) {
//             result.push(this.collection[key]);
//         };
//         return (result.length > 0) ? result : null;
//     };
// }

var str = "stress"

function makeStrArray(str){
    for(let i=0;i<str.length;i++){
        
    }
}

var strArray = [
    ["s",1],
    ["t",2],
    ["r",3],
]

let map = new Map(strArray);
console.log(map.values())

let sMap = new Map();
sMap.set("s",1);
sMap.set("t",1)

console.log(sMap.get('s'))
console.log(sMap.entries())
