function validAnagram(str1, str2){
    if(str1.length !== str2.length) return false
      let freq1 = {}
      let freq2 = {}
      for(let i of str1){
          freq1[i]  = (freq1[i]||0) + 1
      }
      for(let i of str2){
          freq2[i]  = (freq2[i]||0) + 1
      }
      for(let key in freq1){
          if(!(key in freq2)) return false
          if(freq2[key]!=freq1[key]) return false
      }
      return true
  }