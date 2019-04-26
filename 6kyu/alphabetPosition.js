// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabet_position("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

//Needs to be refactored

//something like this....
// function alphabetPosition(text) {
//     const letters = 'abcdefghijklmnopqrstuvwxyz';
    
//     return text.toLowerCase()
//                .split('')
//                .filter(t => letters.indexOf(t) > -1)
//                .map(t => letters.indexOf(t)+1 || '')
//                .join(' ');
//   }

function alphabetPosition(text){
    var letterPosition = {
        "a":1, "A":1,
        "b":2, "B":2,
        "c":3, "C":3,
        "d":4, "D":4,
        "e":5, "E":5,
        "f":6, "F":6,
        "g":7, "G":7,
        "h":8, "H":8,
        "i":9, "I":9,
        "j":10,"J":10,
        "k":11,"K":11,
        "l":12,"L":12,
        "m":13,"M":13,
        "n":14,"N":14,
        "o":15,"O":15,
        "p":16,"P":16,
        "q":17,"Q":17,
        "r":18,"R":18,
        "s":19,"S":19,
        "t":20,"T":20,
        "u":21,"U":21,
        "v":22,"V":22,
        "w":23,"W":23,
        "x":24,"X":24,
        "y":25,"Y":25,
        "z":26,"Z":26
    }

    var letterValues = [];

    for(let i = 0; i < text.length; i++){
        for(let letter in letterPosition){
            if(text[i] === letter){
                letterValues.push(letterPosition[letter]);
            }
        }
    }

    return letterValues.join(" ");
}

alphabetPosition("The sunset sets at twelve o' clock.");