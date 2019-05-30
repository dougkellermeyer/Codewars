//Complete the function scramble(str1, str2) that returns true if a 
//portion of str1 characters can be rearranged to match str2, 
//otherwise returns false.

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

function scramble (s1, s2) {
    const scrambled = frequencies(s1) // => { s: 1, c: 1, r: 1, i: 2, p: 1, t: 1, n: 1, g: 1, j: 1, a: 2, v: 1 }
    const word = frequencies(s2) //=> { j: 1, a: 2, v: 1, s: 1, c: 1, r: 1, i: 1, p: 1, t: 1 }
  
    return s2.split('').every(k => scrambled[k] >= word[k])
  }
  
scramble('scriptingjava', 'javascript') //=> true