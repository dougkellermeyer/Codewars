function validate(x){
    //double every other index in the array
    var valReturnArray =  firstStep(x)
    console.log(valReturnArray)

    function firstStep(n){
        var numArray = n.toString().split("").map(Number)
        return numArray.reverse().map(value => numArray.indexOf(value) % 2 === 0 ? value : value * 2)
    }

        //loop through the array and subtract 9 from anything > 9 
        for(let i = 0; i < valReturnArray.length; i++){
           if(valReturnArray[i] > 9){
            valReturnArray[i]=valReturnArray[i]-=9
           }
        }
        //reduce the array and see if the cc number is valid
        return valReturnArray.reduce((a,b)=>a+b) % 10 === 0 ? true: false
}

console.log(validate([2121])) //true