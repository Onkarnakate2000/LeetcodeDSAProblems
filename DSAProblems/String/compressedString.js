function compressString(input) {
    // Your code here
    if(input.length == 0) return "";
    let compressed = "";
    let count = 1 ;
    for(let i=0;i<input.length;i++){
        if(input[i] === input[i+1] ){
            count++;
        }
          else{
              compressed = compressed + input[i] + count;
              count=1;
          }
    }
          return compressed.length < input.length ? compressed : input;
  }
    
    console.log(compressString("aabbsssff"))