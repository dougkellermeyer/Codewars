function wave (arg) {
    const splitArg = arg.split('')
  
    return splitArg.reduce((acc, v, i) => {
      if (v === ' ') {
        return acc
      }
  
      return acc.concat([...splitArg.slice(0, i), v.toUpperCase(), ...splitArg.slice(i + 1)].join(''))
    }, [])
  }
  
  console.log(wave('hello'))
  
  console.log(wave('hell o'))