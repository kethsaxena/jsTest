const vowelsAndConsonants = s => {
    const vowels = new Set(['a','e','i','o','u'])
  
    const result = s.split('').reduce((acc, char) => {
      if (vowels.has(char)) {
        acc.vowels.push(char)
      } else {
        acc.consonants.push(char)
      }
  
      return acc;
    }, {vowels: [], consonants: []})
  
    result.vowels.forEach(char => console.log(char))
    console.log('--------------')
    result.consonants.forEach(char => console.log(char))
  }
  
  vowelsAndConsonants('egrejgiojseskgjhejrhgekjrhgeiurgh')