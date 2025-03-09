function ThirdLargest(arr){
    let largest = -1;
    // largest = arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            largest = arr[i]
        }
    }
    let secondLargest = -1;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>secondLargest && arr[i]!=largest){
            secondLargest = arr[i];
        }
    }
    let thirdLargest = -1;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>thirdLargest && arr[i]!=largest && arr[i]!=secondLargest){
            thirdLargest = arr[i];
        }
    }
    return thirdLargest;
}

console.log(secondLargest([2,4,5,7,8,9,15,21,22]))