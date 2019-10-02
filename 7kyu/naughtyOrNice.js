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

//Dustin's code
function naughtyOrNice(data) {
    const months = Object.keys(data)

    const { naughty, nice } = months.reduce((acc, k) => {
      const list = Object.values(data[k])
      console.log(list)
      
      list.forEach(v => {
        if (v.toLowerCase() === 'naughty') {
          acc.naughty++
        } else {
          acc.nice++
        }
      })
      
      return acc
    }, { naughty: 0, nice: 0 })
    
    return naughty > nice ? 'Naughty!' : 'Nice!'
  }

console.log(naughtyOrNice(jan));