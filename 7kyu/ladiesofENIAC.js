// Comprised of a team of five incredibly brilliant women, "The ladies of ENIAC" were the first “computors” working at the 
//University of Pennsylvania’s Moore School of Engineering (1945). Through their contributions, we gained the first software 
//application and the first programming classes! The ladies of ENIAC were inducted into the WITI Hall of Fame in 1997!

// Write a function which reveals "The ladies of ENIAC" names, so that you too can add them to your own hall of tech fame!

// To keep: only alpha characters, space characters and exclamation marks.
// To remove: numbers and these characters: %$&/£?@

// Result should be all in uppercase.

function radLadies(name){
   //lets only return the alphas, spaces, and exclamation marks
   var letters = name.match(/[a-z, , !]/gi);
   var lettersJoin = letters.join('');
   return lettersJoin.toUpperCase();
}

console.log(radLadies("u 3H5KK57UwG 1YSB3pUZvhm!iWdx5PQZ"))
