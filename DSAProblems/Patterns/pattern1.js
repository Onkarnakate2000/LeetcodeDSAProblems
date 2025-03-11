let n = 4;
for (let i = 1; i <= n; i++) {  // Rows
    let char = "";
       for (let k = 1; k <= n-i; k++) {
        char += " ";
    }
    // Add spaces
    for (let j = 1; j <= i; j++) {
        char += j;    
    }
    
     for (let j = 1; j <= i-1; j++) {
        char += j;    
    }
        
    console.log(char);
}

//     1
//    121
//   12312
//  1234123