function uniqueInOrder (list) {
    const arr = Array.isArray(list) ? list : list.split('')
  
    return arr.reduce((acc, v) => {
      //compare the first index of acc (acc[i]) to each letter
      //if they are equal, ignore as repeated, if not equal push to acc
      if (acc[acc.length - 1] !== v) {
        acc.push(v)
      }
  
      return acc
    }, [])
  }

  console.log(uniqueInOrder('AAAABBBCCDAABBB'))