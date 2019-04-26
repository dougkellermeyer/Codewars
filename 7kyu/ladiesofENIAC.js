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

console.log(radLadies("///$%&£$553791£r357%??@$%u?$%@7993111£@$%t£$h3% 3$£l$311i3%@?&c3£h%&t&&?%11e%$?@11957r79%£&£m$$a55n1!111%%"))
