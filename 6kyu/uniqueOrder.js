function uniqueInOrder (list) {
    const arr = Array.isArray(list) ? list : list.split('')
  
    return arr.reduce((acc, v, i) => {
      if (acc[acc.length - 1] !== v) {
        acc.push(v)
      }
  
      return acc
    }, [])
  }