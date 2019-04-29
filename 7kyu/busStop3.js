array = [[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]

let sum = 0;

const total = array.reduce((acc, [on, off]) => {
    return acc + on - off;
},0);

console.log(total)