const x = ["bad","bad","bad", "good", "good", "good"]

//this works but only checks to see if there one match, we need to count how many good's there are
function well(arr){
//count how many good's there are
let goodCounter = 0;

    for(let i =0; i < arr.length; i++){
        if(arr[i] === "good") {
            goodCounter++
        }else {continue}
    }
    //if we have 1 or 2 goods, return "Publish"
    if (goodCounter >= 1 && goodCounter <= 2){
        return "Publish!"
    //if we have more than 2 goods, return "I smell a series!"
    } else if(goodCounter > 2){
        return "I smell a series!"
    } else {
        return "Fail!"
    } 
};

console.log(well(x));