"Second largest array in elements"

// function secondLargest(arr){
//     let largest = -1;
//     // largest = arr[0];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>largest){
//             largest = arr[i]
//         }
//     }
//     let secondLargest = -1;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>secondLargest && arr[i]!=largest){
//             secondLargest = arr[i];
//         }
//     }
//     return secondLargest;
// }

// console.log(secondLargest([2,4,5,7,8,9,21,22]))


"Optimial Solution for Second Largest"

// function secondLargest(arr) {
//     if (arr.length < 2) {
//         return -1; // Not enough elements
//     }

//     let largest = -Infinity;
//     let secondLargest = -Infinity;

//     for (let num of arr) {
//         if (num > largest) {
//             secondLargest = largest;
//             largest = num; 
//         } else if (num > secondLargest && num < largest) {
//             secondLargest = num;
//         }
//     }

//     return secondLargest === -Infinity ? -1 : secondLargest;
// }

function FindSecondLargest(arr){
    let n= arr.length;
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
    return{largest,secondLargest}
   }

console.log(FindSecondLargest([2,4,5,7,8,9,21,22]))



