

function bruteStrSearch( str, pattern ) {
  let count = 0; 
  for (var i = 0; i < str.length; ++i) { 
    for (var j = 0; j < pattern.length; ++j) {
      // we add i and j together so that i moves along git git 
      if( pattern[j] !== str[i+j] ) {
        console.log("break");
        break; 
      }
      // we made it to the end of pattern  
      if( j === pattern.length - 1 ) {
        console.log("found one");
        count++; 
      }
    } 
  }
  return count; 
}

console.log( bruteStrSearch("lorie loled", "lo") )