
////////////////////////////////

// function moveZeroesToEnd(arr){
//     let n = arr.length;
//     let index=0;
//     for(let i=0;i<n;i++){
//         if (arr[i] !== 0) {
//             // console.log(arr[index], arr[i])
//             [arr[index], arr[i]] = [arr[i], arr[index]]; // Swap
//             index++;
//         }
//     }
//     console.log("sortedArray:", arr);

// }

// moveZeroesToEnd([2,3,5,7,0,3,2,0,5])

////////////////////////////////


function moveZeroesToEnd(arr){
    let n = arr.length;
    let temp = new Array(n);
    let j=0;
    for(let i=0;i<n;i++){
        if(arr[i]!== 0){
            temp[j++] = arr[i];
        }
    }
    while(j<n){
        temp[j++] = 0;
    }
    for(let i=0;i<n;i++){
        arr[i]=temp[i]  
    }
}

moveZeroesToEnd([2,3,5,7,0,3,2,0,5])