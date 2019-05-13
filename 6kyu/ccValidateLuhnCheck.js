const luhnChk = value => {
    const numArr = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]
    let len = value.length
    let bit = 1
    let sum = 0
    let num = 0
  
    while (len) {
      num = parseInt(value.charAt(--len), 10)
      bit ^= 1
      sum += bit ? numArr[num] : num
    }
  
    return sum && sum % 10 === 0
  }