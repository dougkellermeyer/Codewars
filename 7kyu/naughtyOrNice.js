var jan =  
{
    "January": {

        "1": "Naughty", 
        "2": "Naughty", 
        "3": "Nice", 
        "4": "Naughty", 
        "5": "Nice", 
        "6": "Nice", 
        "7": "Nice", 
        "8": "Naughty", 
        "9": "Nice", 
        "10": "Nice", 
        "11": "Nice", 
        "12": "Nice", 
        "13": "Naughty", 
        "14": "Naughty", 
        "15": "Nice", 
        "16": "Naughty", 
        "17": "Nice", 
        "18": "Nice", 
        "19": "Nice", 
        "20": "Nice", 
        "21": "Nice", 
        "22": "Nice", 
        "23": "Naughty", 
        "24": "Naughty", 
        "25": "Nice", 
        "26": "Nice", 
        "27": "Nice", 
        "28": "Naughty", 
        "29": "Nice", 
        "30": "Nice", 
        "31": "Nice"
    }
};

function naughtyOrNice(JSONdata) {
//count the number of Naughtys and Nices, return whatever is great with 'Naughty!' or 'Nice!'
//put object's key:value pairs into an array
var objArray = Object.values(JSONdata);
var countNaughty = 0;
var countNice = 0;

    for(let i = 0; i < objArray; i++){
        console.log("for loop running")
        if(objArray[i] === "Naughty"){
            countNaughty++
        }else{
            countNice++
        };
    };

if(countNaughty > countNice){
    return "Naughty!"
}else{
    return "Nice!"
}

};

console.log(naughtyOrNice(jan));