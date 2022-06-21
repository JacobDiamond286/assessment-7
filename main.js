function addToZero(arr) {
    if (arr.length < 2) {
      return false;
    }
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === 0) {
          return true;
        }
      }
    }
    return false;
  }
  
  function hasUniqueChars(str){
      let letters = {}
  
      for(let i =0;i < str.length;i++){
          if(letters[str[i]]){
              return false
          } else {
              letters[str[i]] = 1
              console.log(letters)
          }
      }
      return true
  }
  
  function isPangram(str){
      let alphabet = 'abcdefghijklmnopqrstuvwxyz';
      let regex = /\s/g;
      let lowercase = str.toLowerCase().replace(regex,"")
  
      for(let i = 0; i < alphabet.length;i++){
          if(lowercase.indexOf(alphabet[i]) === -1){
              return false
          }
      }
      return true
  }
  console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
  console.log(isPangram("I like cats, but not mice"));
  
  function findLongestWord(arr){
  
      let longest = arr[0]
  
      for(let i = 0;i < arr.length;i++){
          if(longest.length < arr[i].length){
              longest = arr[i]
          }
      }
      return longest.length
  }

  console.log(findLongestWord(["hi","hello","what's up?","how's it going?"]))