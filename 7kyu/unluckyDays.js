// Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

// Find the number of Friday 13th in the given year.

// Input: Year as an integer.

// Output: Number of Black Fridays in the year as an integer.

function unluckyDays(year){
    //unlucky will be our counter
    let unlucky = 0;

    //we want to give the Date() method a year input, loop through the months (i), and then hone in on the 13th day of each month
    for (var i = 0; i < 12; i++) {
      //we not only want the 13th day of each month, but only care about the Friday (5) because the week is 0-6, where 0 is Sunday
      if(new Date(year, i, 13).getDay() === 5){
        unlucky++;
      }
    }
    return unlucky;
  }

console.log(unluckyDays(1992));
