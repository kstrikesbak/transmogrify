const biggify = function(num) {
  return num + 9000
}

const nasafy = function(num) {
  let newArr = []
  for (let i=num; i>0; i--) {
    newArr.push(i)
  }
  newArr.push('Blast off!')
  return newArr

}

const reversify = function(str) {
  let newStr = ''
  for (let i = str.length-1 ; i>-1; i--) {
    newStr += str[i]
  }
  return newStr
}

const titleify = function(str) {
  let newStr = ''
  for (let i = 0 ; i<str.length; i++) {
    if (i===0) {
      newStr += str[i].toUpperCase()
    }
    else if (str[i]!==' ') {
      newStr +=str[i].toLowerCase()
    } else {
      newStr += ' ' + str[i+1].toUpperCase()
      i++
    }
  }
  return newStr
}

const crazify = function(str) {
  let newStr = ''
  let count = 0 
  for (let i = 0 ; i<str.length; i++) {
    if (str[i] === ' ' ) {
      newStr += ' '
    }
    else if (count % 2 === 0) {
      newStr += str[i].toLowerCase()
      count++
    } else  {
      newStr +=str[i].toUpperCase()
      count++
    }
  }
  return newStr 
}


module.exports = {
  biggify,
  nasafy,
  reversify,
  titleify,
  crazify,
}