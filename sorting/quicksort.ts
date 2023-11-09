//Time complexity: O(n log n)
//Space complexity: O(log n)

export default function quickSort(arr: number[]): number[]{
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[0];
    const left: number[] = []
    const right: number[] = []

    for(let i: number = 1; i<arr.length; i++){
        if(pivot<=arr[i]){
            right.push(arr[i])
        } else {
            left.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

import { unsortedArray } from "./array";
console.log(quickSort(unsortedArray))