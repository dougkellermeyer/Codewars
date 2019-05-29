function frequencies (coll) {
    const results = {}
  
    for (let i = 0, len = coll.length; i < len; i++) {
      const v = coll[i]
  
      if (results[v]) {
        results[v] += 1
      } else {
        results[v] = 1
      }
    }
  
    return results
  }
  
  console.log(frequencies('javascript'))