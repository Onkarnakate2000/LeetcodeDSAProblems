function getOrderedElements(arr,n){
    if(n<2){
        return -1;
    }
 let secondLargest = secondLargest(arr,n);
 let secondSmallest = secondSmallest(arr,n);
 return {secondLargest,secondSmallest};
}

function secondLargest(arr,n){
    let largest = -1;
    let secondLargest = -1
    for(let num of arr){
        if(num > largest){
            secondLargest= largest
            largest = num;
        }
        else if(num>secondLargest && secondLargest<largest){
            secondLargest = num;
        }
    }
    return secondLargest
   }
   
function secondSmallest(arr,n){
    let secondSmallest = Infinity;
    let smallest = Infinity;
    for(let num of arr){
        if(num<smallest){
            secondSmallest = smallest;
            smallest = num;
        }
        else if(num!=smallest &&  num < secondSmallest){
            secondSmallest = num;
        }
    }

    return secondSmallest;
}

console.log(getOrderedElements([1,4,5,7,8,9,21,22]))
