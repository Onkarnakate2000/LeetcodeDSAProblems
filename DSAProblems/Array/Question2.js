"<largest Element is an array>"

function largestElement(arr){
    let largest = 0;
    // largest = arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            largest = arr[i]
        }
    }
    return largest;
}

console.log(largestElement([2,4,5,7,8,5,3,22]))