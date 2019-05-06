array = [[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]

const total = array.reduce((acc, [on, off]) => {
    console.log("acc is " + acc)
    return acc + on - off;
},0);

console.log(total)