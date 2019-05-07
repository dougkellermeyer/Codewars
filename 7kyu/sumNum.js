//add up the whole numbers from 1 to n

function f(n) {
    return (Number.isInteger(n) === n && n > 0) ? n*(n+1)/2 : false;
}

console.log(f('100'));
